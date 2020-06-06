import { readJson } from 'https://deno.land/std/fs/read_json.ts';
import { exists } from 'https://deno.land/std/fs/exists.ts';
import { join } from 'https://deno.land/std/path/mod.ts';

const CONFIG_FILE = join(Deno.cwd(), 'deno.json');

type Scripts = { [key: string]: string };

interface Configs {
    cmds?: Scripts;
}

async function start() {
    let config: Configs = {};
    if (await exists(CONFIG_FILE)) {
        config = (await readJson(CONFIG_FILE)) as Configs;
    }
    if (Deno.args[0] === 'cmd') {
        if (!config.cmds) {
            console.log('No command found in', CONFIG_FILE);
        } else {
            const cmds = config.cmds;
            if (Deno.args[1]) {
                const [,cmd, ...args] = Deno.args;
                if (cmds[cmd]) {
                    runCmd(cmds[cmd], args);
                } else {
                    console.error('Command not found:', cmd);
                }
            } else {
                Object.keys(cmds).forEach((cmd) =>
                    console.log(`${cmd}: ${cmds[cmd]}`),
                );
            }
        }
    } else if (Deno.args[0] && config.cmds && config.cmds[Deno.args[0]]) {
        const [cmd, ...args] = Deno.args;
        runCmd(config.cmds[cmd], args);
    } else {
        runDeno(Deno.args);
    }
}

if (import.meta.main) {
    start();
}

function runCmd(cmd: string, args: string[]) {
    return run([...cmd.split(' '), ...args]);
}

function runDeno(args: string[]) {
    return run(['deno', ...args]);
}

function run(cmd: string[]) {
    return Deno.run({
        cmd,
        stdout: 'inherit',
        stderr: 'inherit',
        stdin: 'inherit',
    }).status();
}
