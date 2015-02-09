if(!lt.util.load.provided_QMARK_('lt.plugins.darkroom')) {
goog.provide('lt.plugins.darkroom');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.console');
goog.require('lt.objs.opener');
goog.require('lt.objs.document');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.util.load');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('crate.binding');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.console');
goog.require('clojure.string');
goog.require('lt.objs.document');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('clojure.string');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.object');
goog.require('crate.binding');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.load');
lt.plugins.darkroom.plugin_data = lt.objs.plugins.by_name.call(null,"darkroom");
/**
* Returns composed, absolute and valid (safe) path to a file system resource
* (file/folder) located within the plugin root folder, elsewise throws error.
*/
lt.plugins.darkroom.safe_get_file = (function safe_get_file(s){if(typeof s === 'string')
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",772676615,null),new cljs.core.Symbol(null,"s","s",-1640531412,null))))].join('')));
}
var cap = lt.objs.files.join.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(lt.plugins.darkroom.plugin_data),s);if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,cap)))
{return cap;
} else
{throw (new Error([cljs.core.str("Could not locate a file system resource (file or folder) at path '"),cljs.core.str(cap),cljs.core.str("'. Please check for errors and see if the path exists.")].join('')));
}
});
lt.plugins.darkroom.button = (function button(class$,action,label,title){var e__8103__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("button "),cljs.core.str(cljs.core.name.call(null,class$))].join(''),new cljs.core.Keyword(null,"title","title",1124275658),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),label], null)], null));var seq__9151_9169 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__8103__auto__){
return (function (){return lt.plugins.darkroom.take_photo.call(null);
});})(e__8103__auto__))
], null)));var chunk__9152_9170 = null;var count__9153_9171 = 0;var i__9154_9172 = 0;while(true){
if((i__9154_9172 < count__9153_9171))
{var vec__9155_9173 = cljs.core._nth.call(null,chunk__9152_9170,i__9154_9172);var ev__8104__auto___9174 = cljs.core.nth.call(null,vec__9155_9173,0,null);var func__8105__auto___9175 = cljs.core.nth.call(null,vec__9155_9173,1,null);lt.util.dom.on.call(null,e__8103__auto__,ev__8104__auto___9174,func__8105__auto___9175);
{
var G__9176 = seq__9151_9169;
var G__9177 = chunk__9152_9170;
var G__9178 = count__9153_9171;
var G__9179 = (i__9154_9172 + 1);
seq__9151_9169 = G__9176;
chunk__9152_9170 = G__9177;
count__9153_9171 = G__9178;
i__9154_9172 = G__9179;
continue;
}
} else
{var temp__4126__auto___9180 = cljs.core.seq.call(null,seq__9151_9169);if(temp__4126__auto___9180)
{var seq__9151_9181__$1 = temp__4126__auto___9180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9151_9181__$1))
{var c__7454__auto___9182 = cljs.core.chunk_first.call(null,seq__9151_9181__$1);{
var G__9183 = cljs.core.chunk_rest.call(null,seq__9151_9181__$1);
var G__9184 = c__7454__auto___9182;
var G__9185 = cljs.core.count.call(null,c__7454__auto___9182);
var G__9186 = 0;
seq__9151_9169 = G__9183;
chunk__9152_9170 = G__9184;
count__9153_9171 = G__9185;
i__9154_9172 = G__9186;
continue;
}
} else
{var vec__9156_9187 = cljs.core.first.call(null,seq__9151_9181__$1);var ev__8104__auto___9188 = cljs.core.nth.call(null,vec__9156_9187,0,null);var func__8105__auto___9189 = cljs.core.nth.call(null,vec__9156_9187,1,null);lt.util.dom.on.call(null,e__8103__auto__,ev__8104__auto___9188,func__8105__auto___9189);
{
var G__9190 = cljs.core.next.call(null,seq__9151_9181__$1);
var G__9191 = null;
var G__9192 = 0;
var G__9193 = 0;
seq__9151_9169 = G__9190;
chunk__9152_9170 = G__9191;
count__9153_9171 = G__9192;
i__9154_9172 = G__9193;
continue;
}
}
} else
{}
}
break;
}
return e__8103__auto__;
});
lt.plugins.darkroom.hello_panel = (function hello_panel(this$){var e__8103__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",1126107117),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"camFeed",new cljs.core.Keyword(null,"width","width",1127031096),"320",new cljs.core.Keyword(null,"height","height",4087841945),"240",new cljs.core.Keyword(null,"autoplay","autoplay",2453466325),new cljs.core.Keyword(null,"true","true",1017473280)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"photo",new cljs.core.Keyword(null,"width","width",1127031096),"320",new cljs.core.Keyword(null,"height","height",4087841945),"240"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),lt.plugins.darkroom.button.call(null,"take-photo","Take photo","Take a photo")], null)], null));var seq__9163_9194 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__9164_9195 = null;var count__9165_9196 = 0;var i__9166_9197 = 0;while(true){
if((i__9166_9197 < count__9165_9196))
{var vec__9167_9198 = cljs.core._nth.call(null,chunk__9164_9195,i__9166_9197);var ev__8104__auto___9199 = cljs.core.nth.call(null,vec__9167_9198,0,null);var func__8105__auto___9200 = cljs.core.nth.call(null,vec__9167_9198,1,null);lt.util.dom.on.call(null,e__8103__auto__,ev__8104__auto___9199,func__8105__auto___9200);
{
var G__9201 = seq__9163_9194;
var G__9202 = chunk__9164_9195;
var G__9203 = count__9165_9196;
var G__9204 = (i__9166_9197 + 1);
seq__9163_9194 = G__9201;
chunk__9164_9195 = G__9202;
count__9165_9196 = G__9203;
i__9166_9197 = G__9204;
continue;
}
} else
{var temp__4126__auto___9205 = cljs.core.seq.call(null,seq__9163_9194);if(temp__4126__auto___9205)
{var seq__9163_9206__$1 = temp__4126__auto___9205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9163_9206__$1))
{var c__7454__auto___9207 = cljs.core.chunk_first.call(null,seq__9163_9206__$1);{
var G__9208 = cljs.core.chunk_rest.call(null,seq__9163_9206__$1);
var G__9209 = c__7454__auto___9207;
var G__9210 = cljs.core.count.call(null,c__7454__auto___9207);
var G__9211 = 0;
seq__9163_9194 = G__9208;
chunk__9164_9195 = G__9209;
count__9165_9196 = G__9210;
i__9166_9197 = G__9211;
continue;
}
} else
{var vec__9168_9212 = cljs.core.first.call(null,seq__9163_9206__$1);var ev__8104__auto___9213 = cljs.core.nth.call(null,vec__9168_9212,0,null);var func__8105__auto___9214 = cljs.core.nth.call(null,vec__9168_9212,1,null);lt.util.dom.on.call(null,e__8103__auto__,ev__8104__auto___9213,func__8105__auto___9214);
{
var G__9215 = cljs.core.next.call(null,seq__9163_9206__$1);
var G__9216 = null;
var G__9217 = 0;
var G__9218 = 0;
seq__9163_9194 = G__9215;
chunk__9164_9195 = G__9216;
count__9165_9196 = G__9217;
i__9166_9197 = G__9218;
continue;
}
}
} else
{}
}
break;
}
return e__8103__auto__;
});
lt.plugins.darkroom.on_success = (function on_success(stream){return document.getElementById.call(null,"camFeed").src = webkitURL.createObjectURL.call(null,stream);
});
lt.plugins.darkroom.on_fail = (function on_fail(){return alert("could not connect stream");
});
lt.plugins.darkroom.take_photo = (function take_photo(){var c = window.document.getElementById("photo");var v = window.document.getElementById("camFeed");return c.getContext("2d").drawImage(v,0,0,320,240);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.darkroom","darkroom.hello","lt.plugins.darkroom/darkroom.hello",3224571395),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"darkroom.hello","darkroom.hello",1994112359)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.darkroom","on-close-destroy","lt.plugins.darkroom/on-close-destroy",2556328397)], null),new cljs.core.Keyword(null,"name","name",1017277949),"darkroom",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){if(cljs.core.truth_(navigator.webkitGetUserMedia))
{return navigator.webkitGetUserMedia(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"video","video",1126107117),true], null)),lt.plugins.darkroom.on_success,lt.plugins.darkroom.on_fail);
} else
{return null;
}
}),lt.plugins.darkroom.hello_panel.call(null,lt.plugins.darkroom.this$));
lt.plugins.darkroom.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4126__auto___9219 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4126__auto___9219))
{var ts_9220 = temp__4126__auto___9219;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_9220))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_9220);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.darkroom","on-close-destroy","lt.plugins.darkroom/on-close-destroy",2556328397),new cljs.core.Keyword(null,"desc","desc",1016984067),"Darkroom: Close tab and tabset as well if last tab",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.darkroom.__BEH__on_close_destroy);
lt.plugins.darkroom.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.darkroom","darkroom.hello","lt.plugins.darkroom/darkroom.hello",3224571395));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.darkroom","say-hello","lt.plugins.darkroom/say-hello",3489244040),new cljs.core.Keyword(null,"desc","desc",1016984067),"Darkroom: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.darkroom.hello);
})], null));
}

//# sourceMappingURL=darkroom_compiled.js.map