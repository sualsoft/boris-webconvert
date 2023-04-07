<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite1f145c2b5e4755282fc8ba21d92d991
{
    public static $prefixesPsr0 = array (
        'D' => 
        array (
            'Detection' => 
            array (
                0 => __DIR__ . '/..' . '/mobiledetect/mobiledetectlib/namespaced',
            ),
        ),
    );

    public static $classMap = array (
        'Mobile_Detect' => __DIR__ . '/..' . '/mobiledetect/mobiledetectlib/Mobile_Detect.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInite1f145c2b5e4755282fc8ba21d92d991::$prefixesPsr0;
            $loader->classMap = ComposerStaticInite1f145c2b5e4755282fc8ba21d92d991::$classMap;

        }, null, ClassLoader::class);
    }
}