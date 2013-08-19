sticKO
======

jQuery plugin for creating sticky sidebars for multiple elements.

How to use it?

Html structure:
	for left sided: <holder><sidebar></sidebar><content></content></holder>
	for right sided: <holder><content></content><sidebar></sidebar></holder>
jQuery parameters:
	{
        side: 'left',//[left or right]
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        topTollerance: 50,//height of fixed header, if any is used
        sidebarClass: 'tools'//class of sidebar div element
     }

For more information view right.html or left.html examples or email me.