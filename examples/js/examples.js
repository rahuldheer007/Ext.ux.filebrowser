Ext.onReady(function() {

    var filebrowser1 = new Ext.ux.FileBrowser({
        renderTo:"filebrowser1"
        ,rootText:"Home"
        ,height:290
        ,width:650
        ,readOnly:false
        ,enableBrowser:true
        ,url:"php/getfiles.php"
    });

    var filebrowser2 = new Ext.ux.FileBrowser({
        renderTo:"filebrowser2"
        ,rootText:"Home"
        ,height:200
        ,width:200
        ,readOnly:false
        ,url:"php/getfiles.php"
    });

    var filebrowser3 = new Ext.ux.FileBrowser({
        renderTo:"filebrowser3"
        ,rootText:"Home"
        ,height:200
        ,width:200
        ,url:"php/getfiles.php"
    });

});
