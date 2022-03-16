
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
    [14:03:28] Using gulpfile ~\Desktop\test\gulpfile.js
    [14:03:28] Starting 'build'...
    [14:03:28] Starting 'clean'...
    [14:03:28] Finished 'clean' after 24 ms
    [14:03:28] Starting 'htmlmin'...
    1.0.0.
    [14:03:28] Finished 'htmlmin' after 23 ms
    [14:03:28] Starting 'fonts'...
    [14:03:28] Finished 'fonts' after 3.01 ms
    [14:03:28] Starting 'csscompress'...
    [14:03:28] Finished 'csscompress' after 17 ms
    [14:03:28] Starting 'jscompress'...
    [14:03:28] Finished 'jscompress' after 102 ms
    [14:03:28] Starting 'imagemin'...
    [14:03:28] gulp-imagemin: Minified 1 image (saved 285 B - 23.6%)
    [14:03:28] Finished 'imagemin' after 77 ms
    [14:03:28] Finished 'build' after 250 ms
    Done in 1.23s.
    ```
