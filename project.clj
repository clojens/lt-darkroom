(defproject darkroom "0.1.0"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [lein-light-nrepl "0.1.0"]]
  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]}
  )
