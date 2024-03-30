// Copyright (c) 2024 Tomohide Takao
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
    apps: [{
        name: "fe",
        script: "./node_modules/.bin/next",
        args: "start . -p 3000",
        instances: 2,
        exec_mode: "cluster",
        autorestart: true,
    }]
}