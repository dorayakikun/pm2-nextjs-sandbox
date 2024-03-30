// Copyright (c) 2024 Tomohide Takao
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
    apps: [{
        name: "fe",
        script: "./start.js",
        instances: 2,
        exec_mode: "cluster",
        autorestart: true,
    }]
}
