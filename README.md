# eslint-config-centra

A shareable ESLint configuration used in Centra projects.

## Usage

1. Install the package.

    ```bash
    npm i -D github:centrahq/eslint-config-centra
    ```

1. Add `eslint-centra-config` to your `.eslintrc`.

    ```json
    {
      "extends": [
        "centra"
      ]
    }
    ```
    
## Notes

> In order to install private GitHub packages, the user needs to have access
> to this repository. When installing the app on Heroku, a following script may be required:
>
> ```json
> {
>   "scripts": {
>      "heroku-prebuild": "git config --global url.\"https://${GITHUB_AUTH_TOKEN}> :x-oauth-basic@github.com/\".insteadOf https://github.com/"
>   }
> }
> ```
>
> This assumes `GITHUB_AUTH_TOKEN` is an environment variable representing a GitHub OAuth token
> granting access to the `eslint-config-centra` repository.
