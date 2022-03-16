
1. 命令
    
    初始化（初始化不用使用yarn，！！！会导致gulp-imagemin报错）
    ```sh
    cnpm install
    ```
    
    打包
    ```sh
    yarn build
    ```

    删除dist文件夹
    ```sh
    yarn clean
    ```

    运行成功
    ```sh
    $ gulp build
    [18:19:46] Using gulpfile D:\software\testGulpfile\gulpfile.js
    [18:19:46] Starting 'build'...
    [18:19:46] Starting 'clean'...
    [18:19:46] Finished 'clean' after 18 ms
    [18:19:46] Starting 'fonts'...
    [18:19:46] Finished 'fonts' after 7.07 ms
    [18:19:46] Starting 'csscompress'...
    [18:19:46] Finished 'csscompress' after 25 ms
    [18:19:46] Starting 'jscompress'...
    [18:19:47] Finished 'jscompress' after 203 ms
    [18:19:47] Starting 'imagemin'...
    [18:19:47] gulp-imagemin: Minified 2 images (saved 293 B - 13.7%)
    [18:19:47] Finished 'imagemin' after 94 ms
    [18:19:47] Starting 'htmlmin'...
    [18:19:47] Finished 'htmlmin' after 18 ms
    [18:19:47] Finished 'build' after 370 ms
    Done in 1.54s.
    ```


## 兼容
    监听的没有必要做了，使用vsCode的小伙伴直接使用插件Live Server就可以啦，安装好插件右键open with live server就可以啦