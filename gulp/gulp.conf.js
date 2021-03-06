/**
 * This is the configuration file.
 *
 * This file is used by gulp tasks.
 */

import path from 'path';

export const INDEX                = 'index.html';
export const DIST_DIR             = 'dist';
export const SRC_DIR              = 'src';
export const SRC_ELECTRON         = 'electron';
export const DIST_PACKAGE         = 'package';    
export const APP_SRC              = path.join(SRC_DIR, 'app');
export const STYLES_SRC           = path.join(SRC_DIR, 'styles');
export const ASSETS_SRC           = path.join(SRC_DIR, 'assets');
export const DEV_DIR              = path.join(DIST_DIR, 'dev');
export const PROD_DIR             = path.join(DIST_DIR, 'prod');
export const TMP_DIR              = path.join(DIST_DIR, 'tmp');
export const TEMPLATE_DIR         = path.join(DIST_DIR, 'template');
export const DEV_PACKAGE          = path.join(DIST_PACKAGE, 'dev');
export const JS_PROD_LIBS_BUNDLE  = 'libs.js';
export const CSS_PROD_LIBS_BUNDLE = 'libs.css';
export const JS_PROD_APP_BUNDLE   = 'app.js';
export const CSS_PROD_BUNDLE      = 'all.css';
export const ELECT_PROD_MAIN      = 'main.js';
export const ELECT_PROD_JSON      = 'package.json';
export const JS_PROD_DIR          = path.join(PROD_DIR, 'js');
export const CSS_PROD_DIR         = path.join(PROD_DIR, 'css');

export const JS_NPM_DEPENDENCIES = [
    {src: 'node_modules/core-js/client/shim.min.js', inject: 'shims'},
    {src: 'node_modules/zone.js/dist/zone.js', inject: 'libs'},
    {src: 'node_modules/reflect-metadata/Reflect.js', inject: 'libs'},
    
    {src: 'node_modules/tether-1.3.1/dist/js/tether.js', inject: 'libs'},
    {src: 'node_modules/jquery/dist/jquery.js', inject: 'libs'},
    // {src: 'node_modules/bootstrap/dist/js/bootstrap.js', inject: 'libs'},        
    {src: 'node_modules/metro-dist/js/metro.min.js', inject: 'libs'},
    
    {src: 'node_modules/systemjs/dist/system.src.js', inject: 'libs'}
];

export const CSS_NPM_DEPENDENCIES = [
    
    {src: 'node_modules/font-awesome/css/font-awesome.min.css', inject: 'libs'},
    {src: 'node_modules/metro-dist/css/metro.min.css', inject: 'libs'}

];

const NPM_DEPENDENCIES = JS_NPM_DEPENDENCIES.concat(CSS_NPM_DEPENDENCIES);

const PROJECT_DEPENDENCIES = [
    {src: path.join(STYLES_SRC, 'main.css'), inject: 'project'},
    {src: path.join(SRC_DIR, 'systemjs.config.js'), inject: 'project'}

];

export const DEPENDENCIES = NPM_DEPENDENCIES.concat(PROJECT_DEPENDENCIES);