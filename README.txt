Drupal 6.x theme for Smithsonian.
=================================

This theme is the theme for Smithsonian. It a modification of fusion_starter, a
Fusion sub-theme based on the original Smithsonian design at si.org.

Installation guidelines:
========================

- copy the folder to the theme folder. Often this is /sites/all/themes. If you 
download this theme from git, you might need to rename the folder of the theme
to 'smithsonian'.
- copy the fusion theme to the same theme folder as well.
- download and enable the skinr module
- enable the theme at admin/build/themes.

- Use primary menu as the main navigation.

- cssPie is added as functionality. It can only be called using a relative path
to the current page, not the css file where it is called from. So if the 
theme is not located at sites/all/themes/ , you might want to change that in
the css files.
Now it's set as: behavior: url('/sites/all/themes/smithsonian/pie/PIE.htc');

The following skinr options are added when configuring blocks:
- block header: small, medium, large or extra large and bold or uppercase.
- block styles:
    - padding (if no other style applied)
    - white background
    - thin grey border
    - white title, grey background
    - blue background, white text

Under the Smithsonian theme settings, make sure the following options 
are enabled:
- General settings > Layout : 16 column fixed grid
- General settings > Navigation : make sure primary menu is set as dropdown.

For panels:
- panel regions are themable with a white background and/or grey border. This
does not include padding. You'll have to set this on the block/pane level.
- panes have the same Smithsonian skinr settings as blocks.

If you want the search form enabled at the top of the page, make sure to give
search permissions to anonymous users.

TODO:
- slideshow?
- option for blocks: top, center, bottom. So you can create the illusion of one 
long sidebar with multiple blocks in it. (not going to do this yet. You can
 theme a panels region)
- add example screenshots to the Smithsonian block styles/titles.
- clean up the css files a bit.
- add skinr styles for panels (done - update readme.txt)