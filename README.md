
#refer to the demo

Web Image lazy loading

#way to use
1.include ImageLazy.js

    e.g     <script src="js/ImageLazy.js"></script>

2.set image class property with specific className(default name is '_imageLazy')
  and set data-src property with real image url

    e.g  <img data-src="./imgs/img2.png" class="_imageLazy">

3.call ImageLazy() after document loaded


#TIPS

ImageLazy(className,options)

<h2>className</h2>

default image class name is '_imageLazy'
you can change classname by ImageLazy('newclassname')

<h2>options</h2>
delayTime   -   the delay time to trigger loading   (default value is 1000ms)

offset      -   the offset to trigger loading       (default value is 150px)

E.g

    ImageLazy("",{delayTime:500,offset:100});
