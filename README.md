# denop

A better deno cli :p

denop give the possibility to create a `deno.json` file and execute some pre-defined commands.

```json
{
    "cmds": {
        "my-ls": "ls",
        "start": "deno run --allow-read --allow-net your_script.ts"
    }
}
```

You can then run:

-   `denop cmd` to get the list of commands
-   `denop cmd my-ls` or `denop my-ls` to execute the command
-   `denop cmd my-ls -l` or `denop my-ls -l` to execute the command with extra params

## installation

Use deno [installer](https://deno.land/manual/tools/script_installer):

```sh
deno install -f --allow-run --allow-read https://raw.githubusercontent.com/apiel/denop/master/denop.ts
```
