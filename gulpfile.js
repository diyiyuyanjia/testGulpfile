var gulp = require('gulp');
//删除文件
var clean = require('gulp-clean');
//压缩css文件
var cleanCSS = require('gulp-clean-css');
//压缩html文件
var htmlmin = require('gulp-htmlmin');
//压缩js文件插件
var uglify = require('gulp-uglify');
//es6转es5
var babel = require('gulp-babel');
// 图片压缩
var imagemin = require('gulp-imagemin');

//加版本号
var revCollector = require('gulp-rev-collector')
// var revCollector = require('gulp-asset-rev');

// 
var rev = require("gulp-rev")
//混淆
var obfuscate = require('gulp-javascript-obfuscator')

// 输入路径
var distName = 'dist/'
var srcName = "src/"

// clean被执行时,先清空对应目录下图片、样式、js等
gulp.task('clean', function (cb) {
    return gulp.src('./dist', { read: false, allowEmpty: true })
        .pipe(clean()).on("end", cb);
});

// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function (cb) {
    // 1. 找到文件
    return gulp.src(`${srcName}/css/*`)
        .pipe(rev()) //文件名加MD5后缀
        // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest(`${distName}css`))
        .pipe(rev.manifest('rev-css-manifest.json')) //生成一个rev-manifest.json
        .pipe(gulp.dest('dist/rev')) //将 rev-manifest.json 保存到 rev 目录内
        .on("end", cb);
});

        

// 压缩 js 文件
// 在命令行使用 gulp jscompress 启动此任务
gulp.task('jscompress', function (cb) {
    // 1. 找到文件
    return gulp.src([`${srcName}js/*`])
        .pipe(babel({presets:['es2015']}))
        .pipe(uglify({
            mangle: {toplevel:true}, // 这个是简单混淆 就是变量变成单个字母
            compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(rev()) //文件名加MD5后缀
        .pipe(obfuscate()) //混淆
        .pipe(gulp.dest(`${distName}js`))
        .pipe(rev.manifest('rev-js-manifest.json'))
        .pipe(gulp.dest(`${distName}rev`))
        .on("end", cb); // 3. 另存压缩后的文件
});

// 图片处理
gulp.task('imagemin', function (cb) {
    return gulp.src(`${srcName}image/**/*`)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(`${distName}image`))
        .on("end", cb);
});

// fonts处理
gulp.task('fonts', function (cb) {
    var fontsSrc = `${srcName}fonts/*.*`;
    return gulp.src(fontsSrc)
        .pipe(rev()) //文件名加MD5后缀
        .pipe(gulp.dest(`${distName}fonts`))
        .pipe(rev.manifest('rev-fonts-manifest.json'))
        .pipe(gulp.dest(`${distName}rev`))
        .on("end", cb);
});

//gulp-htmlmin  压缩html
gulp.task('htmlmin', function (cb) {
    //htmlmin options
    var htmlminOptions = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: false,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src([`${distName}rev/*.json`, `${srcName}*.html`])
    .pipe(revCollector({
        replaceReved: true, // 设置replaceReved标识, 用来说明模板中已经被替换的文件是否还能再被替换,默认是false
    }))
    .pipe(htmlmin(htmlminOptions))
    .pipe(gulp.dest(distName)).on("end", cb);
});

// 删除dist/rev
gulp.task('deleteRev', function (cb) {
    return gulp.src('./dist/rev', { read: false, allowEmpty: true })
        .pipe(clean()).on("end", cb);
});

//最后打包
gulp.task('build', gulp.series('clean', 'fonts','imagemin', 'csscompress', 'jscompress', 'htmlmin', 'deleteRev' ));