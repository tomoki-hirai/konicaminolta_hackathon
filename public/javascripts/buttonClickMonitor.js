// -------------------------------------------------------------------
//  button_click_monitor.js
// -------------------------------------------------------------------
jQuery(function()
{
    button_click_monitor ()
})

// -------------------------------------------------------------------
function button_click_monitor ()
{
    jQuery ("a").click (function ()
        {
        window.location.href = "/meeting" + "?room_name=" + document.getElementById('room_name').value;;
        })
}

// -------------------------------------------------------------------
