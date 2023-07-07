<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ch-13' );

/** Database username */
define( 'DB_USER', 'ch13' );

/** Database password */
define( 'DB_PASSWORD', '652222' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!+-7IO|^^kGo,f5F0U2-.hpXOL5hqq=J:,J8)v2$|>K@P>~u#ZSOa3-<P,Ht~U7h' );
define( 'SECURE_AUTH_KEY',  '=.M7wl^3W6BC(F99N!D(N9k$#)K(APy;fS>.7r2(7$c>:|Y)x{eNP>s/k=sxiCSI' );
define( 'LOGGED_IN_KEY',    'cWfa4QfJD.^VSTx3F*!~7tQ;8 Fe`b&=udk4?h|7Lf?>L Gzt+)}@R+jZ.Bv,Gef' );
define( 'NONCE_KEY',        'nkH[7al7Y(VcdGo!zm|}s]56z8,<GkZ,,]kyu*Qq aV^7BZpzC+UJC^IpxAG m]c' );
define( 'AUTH_SALT',        'KxROoTV$(qe0D-%pZ V7ZyLI_89[Xd6-nw=7QlR{ayZo^dF%_j@X)T(ITm/u8?C5' );
define( 'SECURE_AUTH_SALT', '{(_usMX@0]YEsL&FfnV3FO486j>8UaiXtbMiY[,i)/=K#oyZbQ|)eH0Aq VGt|C%' );
define( 'LOGGED_IN_SALT',   'kS$#$Q_c%t%gqN#c+8?UlBR&A^A}{5M-)(!qcZE/^q*@C/l}OP:5CNlJrcamwr&K' );
define( 'NONCE_SALT',       '4L@)ls.ER-!|6^b$ehC<x=s^kftY5L:XzzvXLh]zT1b#%G)#[RC?^0Bj3b94<-g&' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */

define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

//serverside/wp-json/task-api/v1/task/

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
