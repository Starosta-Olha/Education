const path = require('node:path')
const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

const SRC = './src';
const BUILD = './build';

const paths = {
    build: {
        root: `${BUILD}/`,
        css: `${BUILD}/css/`,
        img: `${BUILD}/img/`,
        //js: `${BUILD}/js/`,
        html: `${BUILD}/`
    },
    src: {
        scss: `${SRC}/scss/main.scss`,
        ts: `${SRC}/ts/index.ts`,
        img: `${SRC}/img/**/*`,
        // public: `${PUBLIC}/**/*`,
    },
    compileWatch: {
        scss: `${SRC}/scss/**/*.scss`,
        // js: `${SRC}/js/**/*.js`,
        ts: `${SRC}/ts/**/*.ts`,
        img: `${SRC}/img/**/*`,
        html: `${SRC}/html/*.html`,
    },
    reloadWatch: {
        css: `${BUILD}/**/*.css`,
        js: `${BUILD}/**/*.js`,
        img: `${BUILD}/img/**/*`,
        html: `${BUILD}/*.html`,
    },
};

const tsProject = ts.createProject(path.resolve(process.cwd(), './tsconfig.json'));
const project = tsProject()

function compileTypescript() {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(project)
        .pipe(sourcemaps.write({
            sourceRoot: (file) => {
                const sourceFile = path.join(file.cwd, 'src', file.sourceMap.file)
                return path.relative(path.dirname(sourceFile), file.cwd)
            }
        }))
        .pipe(gulp.dest(paths.build.root))
}

gulp.task('clean', (cb) => {
    del.sync([paths.build.root]/*, { dot: true }*/)
    cb()
});

gulp.task('scripts', (cb) => {
    compileTypescript();
    cb();
});

gulp.task('build', gulp.series('clean', 'scripts'));

gulp.task('watch', () => {
    gulp.watch(paths.compileWatch.js, gulp.series('scripts'));
});

gulp.task('default', gulp.series('build', 'watch'));