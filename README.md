
## 命令


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
    [18:47:27] Using gulpfile D:\software\testGulpfile\gulpfile.js
    [18:47:27] Starting 'build'...
    [18:47:27] Starting 'clean'...
    [18:47:27] Finished 'clean' after 23 ms
    [18:47:27] Starting 'fonts'...
    [18:47:27] Finished 'fonts' after 6.93 ms
    [18:47:27] Starting 'imagemin'...
    [18:47:27] gulp-imagemin: Minified 2 images (saved 293 B - 13.7%)
    [18:47:27] Finished 'imagemin' after 91 ms
    [18:47:27] Starting 'csscompress'...
    [18:47:27] Finished 'csscompress' after 21 ms
    [18:47:27] Starting 'jscompress'...
    [18:47:27] Finished 'jscompress' after 201 ms
    [18:47:27] Starting 'htmlmin'...
    [18:47:27] Finished 'htmlmin' after 17 ms
    [18:47:27] Starting 'deleteRev'...
    [18:47:27] Finished 'deleteRev' after 3.74 ms
    [18:47:27] Finished 'build' after 368 ms
    Done in 1.50s.
    ```


## 兼容
    监听的没有必要做了，使用vsCode的小伙伴直接使用插件Live Server就可以啦
    安装好插件右键open with live server就可以啦