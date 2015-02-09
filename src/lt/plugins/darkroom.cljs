(ns lt.plugins.darkroom
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.files :as files]
            [lt.objs.document :as doc]
            [lt.objs.opener :as opener]
            [lt.objs.editor :as editor]
            [lt.objs.plugins :as plugins]
            [lt.objs.platform :as platform]
            [lt.objs.console :as console]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.editor.pool :as pool]
            [lt.util.load :as load]
            [lt.util.dom :as dom]
            [clojure.string :as string]
            [crate.binding :as bindings])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def plugin-data (plugins/by-name "darkroom"))

(defn safe-get-file
  "Returns composed, absolute and valid (safe) path to a file system resource
  (file/folder) located within the plugin root folder, elsewise throws error."
  [s] {:pre [(string? s)]}
   (let [cap (files/join (:dir plugin-data) s)]
     (if (files/exists? cap) cap
       (throw (js/Error. (str "Could not locate a file system resource (file or folder) at path '"
                             cap "'. Please check for errors and see if the path exists."))))))

(defui button
  [class action label title]
  [:span {:class (str "button " (name class)) :title title}
   [:span label]]
  :click (fn [] (take-photo)))

(defui hello-panel [this]
  [:div
   [:video {:id "camFeed" :width "320" :height "240" :autoplay :true}]
   [:div [:canvas {:id "photo" :width "320" :height "240"}]]
   [:div (button "take-photo" "Take photo" "Take a photo")]])


(defn on-success [stream]
    (set! (.-src (document.getElementById "camFeed")) (webkitURL.createObjectURL stream)))

(defn on-fail []
    (js/alert "could not connect stream"))

(defn take-photo []
  (let [c (-> window.document (.getElementById "photo"))
        v (-> window.document (.getElementById "camFeed"))]
    (-> c (.getContext "2d") (.drawImage v 0 0 320 240))))

;;  (-> window.document (.getElementById "canvas"))


;; (webkitURL.createObjectURL "")
;; (def a (js/navigator.webkitGetUserMedia #js {:video true} foo foo))

(object/object* ::darkroom.hello
                :tags [:darkroom.hello]
                :behaviors [::on-close-destroy]
                :name "darkroom"
                :init (fn [this]
                        (when js/navigator.webkitGetUserMedia
                          (js/navigator.webkitGetUserMedia (clj->js {:video true}) on-success on-fail))
                        (hello-panel this)
                        ))

(behavior ::on-close-destroy
          :triggers #{:close}
          :desc "Darkroom: Close tab and tabset as well if last tab"
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(def hello (object/create ::darkroom.hello))

(cmd/command {:command ::say-hello
              :desc "Darkroom: Say Hello"
              :exec (fn []
                      (tabs/add-or-focus! hello))})
