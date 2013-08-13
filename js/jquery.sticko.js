/*#########################################################
 * Name:         STICKO plugin
 * Version:      0.1v
 * Description:  Creates an sticky sidebar for each element
 * Author:       Kosta Samardziev
 * Email:        kosta.samardziev@gmail.com
 * Date:         summer 2013
 *#########################################################
 */

/*
 * REQUIREMENTS: 
 * CSS:
 *      -holder element needs to be position relative
 *      -sidebar element needs to be position absoulute
 */


(function ($) {
    //start
    $.fn.sticko = function (params) {
        var defaultParametars = {
            side: 'left',
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
            topTollerance: 50,
            sidebarClass: 'tools'
        }

        //extend defaults
        params = $.extend({}, defaultParametars, params);
        //setup initial padding
        //TODO: take this from css class???
        //is it better?
        $('.' + params.sidebarClass).each(function () {
            $(this).css({
                left: params.marginLeft,
                'margin-right': params.side == 'right' ? params.marginLeft + params.marginRight : 'auto',
                top: params.marginTop,
                position: 'relative'
            });
        });

        var sidebarWidth = $(this).find('.' + params.sidebarClass).first().width() + params.marginRight + params.marginLeft;
        if (params.side == 'right') {
            console.log("right");
            var sidebarClone = $("<div></div>", {
                "class": 'sidebar-clone',
                "css": {
                    width: sidebarWidth,
                    display: 'none',
                    height: '1',
                    float: 'left'
                }
            }).prependTo($(this));

        }

        //get instance of current holder objects
        _this = $(this);

        //on windows scroll
        $(window).scroll(function () {
            var windowTop = $(window).scrollTop(); // returns number, distance from top of the page
            _this.each(function () {
                var $holder = $(this);
                var $sidebar = $holder.find('.' + params.sidebarClass).first();
                var _topRel = $holder.offset().top;
                var _bottomRel = $holder.offset().top + $holder.height() - $sidebar.height() - params.marginTop - params.marginBottom;
                //before current element
                if (windowTop + params.topTollerance < _topRel) {
                    $holder.find('.' + params.sidebarClass).css({
                        position: 'relative',
                        top: params.marginTop,
                        left: params.marginLeft,
                        bottom: 'auto'
                    });
                    if (params.side == 'right') {
                        $(this).find('.sidebar-clone').hide();
                    }

                }
                    //in current element
                else if (windowTop + params.topTollerance > _topRel && windowTop + params.topTollerance < _bottomRel) {

                    var sidebarTop = windowTop - $holder.offset().top + params.marginTop;
                    var sidebarLeft = $sidebar.position().left;
                    $holder.find('.' + params.sidebarClass).css({
                        position: 'fixed',
                        top: params.marginTop + params.topTollerance,
                        left: sidebarLeft,
                        bottom: 'auto'
                    });
                    if (params.side == 'right') {
                        $(this).find('.sidebar-clone').show();
                    }


                }
                    //after current element
                else {
                    $holder.find('.' + params.sidebarClass).css({
                        position: 'relative',
                        top: $holder.height() - $sidebar.height() - params.marginBottom,
                        left: params.marginLeft
                    });
                    if (params.side == 'right') {
                        $(this).find('.sidebar-clone').hide();
                    }

                }//end else
            });//end for each
        });//end on window scroll   
        return this;//do not stop the chain
    }//end
})(jQuery);