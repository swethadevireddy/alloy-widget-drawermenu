function WPATH(e){var t=e.lastIndexOf("/"),r=-1===t?"com.alcoapps.drawermenu/"+e:e.substring(0,t)+"/com.alcoapps.drawermenu/"+e.substring(t+1);return 0!==r.indexOf("/")?"/"+r:r}module.exports=[{isId:!0,priority:100000.0002,key:"menuview",style:{backgroundColor:"#cacaca",height:Ti.UI.FILL,width:Ti.UI.FILL}},{isId:!0,priority:100000.0003,key:"mainview",style:{backgroundColor:"red",height:Ti.UI.FILL,width:Ti.UI.FILL}},{isId:!0,priority:100000.0004,key:"mainviewheader",style:{top:"0",height:"50dp",width:Ti.UI.FILL,backgroundColor:"#cacaca"}},{isId:!0,priority:100000.0005,key:"menubutton",style:{left:"0",borderWidth:1,borderColor:"#000",width:"40dp",height:"40dp",visible:!0}}];