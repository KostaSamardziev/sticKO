sticKO
======

jQuery plugin for creating sticky sidebars for multiple elements.
<hr/>
How to use it?
```html
Html structure:<br/>
	for left sided: <pre><holder><sidebar></sidebar><content></content></holder></pre>
	for right sided: <pre><holder><content></content><sidebar></sidebar></holder></pre>
jQuery parameters:<br/>
	<pre>{
        side: 'left',//[left or right]
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        topTollerance: 50,//height of fixed header, if any is used
        sidebarClass: 'tools'//class of sidebar div element
     }
	 </pre>
```
For more information view right.html or left.html examples or email me.