const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'projname',
                message: 'your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        // templates下每个文件的相对路径
        const templates = [
            '.\\components\\NuxtLogo.vue',
            '.\\components\\Tutorial.vue',
            '.\\layouts\\default.vue',
            '.\\pages\\user\\_id.vue',
            '.\\pages\\user\\index.vue',
            '.\\pages\\user\\one.vue',
            '.\\pages\\about.vue',
            '.\\pages\\index.vue',
            '.\\pages\\user.vue',
            '.\\plugins\\element-ui.js',
            '.\\static\\data.json',
            '.\\static\\favicon.ico',
            '.\\store\\README.md',
            '.\\.editorconfig',
            '.\\.gitignore',
            '.\\app.html',
            '.\\jsconfig.json',
            '.\\nuxt.config.js',
            '.\\package.json',
            '.\\README.md'
        ]
        // 把每一个文件都通过模板转换到目标路径
        templates.forEach(item => {
            // item -> 每个文件路径
            this.fs.copyTpl(
                // 模板文件路径
                this.templatePath(item),
                // 目标生成目录
                this.destinationPath(item),
                // 数据上下文
                this.answers
            )
        })
    }
}