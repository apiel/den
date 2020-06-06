# den

A better deno cli :p

den give the possibility to create a `deno.json` file and execute some pre-defined commands.

```json
{
    "cmds": {
        "my-ls": "ls",
        "start": "deno run --allow-read --allow-net your_script.ts"
    }
}
```

You can then run:

-   `den cmd` to get the list of commands
-   `den cmd my-ls` or `den my-ls` to execute the command
-   `den cmd my-ls -l` or `den my-ls -l` to execute the command with extra params

## installation

Use deno [installer](https://deno.land/manual/tools/script_installer):

```sh
deno install -f --allow-run --allow-read https://raw.githubusercontent.com/apiel/den/master/den.ts
```
