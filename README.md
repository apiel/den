# den

A better deno cli :p
A wrapper of deno cli to give some extra features.

den give the possibility to create a `deno.json` file and execute some pre-defined commands.

```json
{
    "cmds": {
        "multi": ["ls", "pwd"],
        "my-ls": "ls",
        "start": "deno run --allow-read --allow-net your_script.ts"
    }
}
```

Then run:

-   `den cmd` to get the list of commands
-   `den cmd my-ls` or `den my-ls` to execute the command
-   `den cmd my-ls -l` or `den my-ls -l` to execute the command with extra params

If the command is an array of command it will run each of them one after the other and add the extra params to each of them, so if you run `den multi --help`, it will execute `ls --help` and `pwd --help`.

All the commands from deno are also available, e.g.:

-   `den run your_script.ts`
-   `den --help`
-   `den eval "console.log(30933 + 404)"`
-   ...

## installation

Use deno [installer](https://deno.land/manual/tools/script_installer):

```sh
deno install -f --allow-run --allow-read https://raw.githubusercontent.com/apiel/den/master/den.ts
```

To upgrade run `den den upgrade`.
