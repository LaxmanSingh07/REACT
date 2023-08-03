## PERFORMANCE OPTIMIZATION TOOLS 

### 1. Prevent wasted Renders 

        👉 memo
        👉 useMemo
        👉 useCallback
        👉 Passing element as children to regular prop

### 2. Improve app speed/reponsiveness

    👉 useMemo
    👉 useCallback
    👉 useTransition


### 3. Reduce bundle size

    👉 Using fewer 3rd package 
    👉 code splitting and lazy loading 


👋 This list of tools and techniques is, by no means, exhaustive. You’re already doing 
many optimizations by following the best practices I have been showing you ✌

## When Does a Component instance RE-RENDER? 

![](./WasteRender.png)


## The Profiler Dev Tool

This dev tool is used to measure the performance of a React app. It can be used to

- Flamegraph: visualize how much time it takes to render each component

The color of the component specifies the time it takes to render the component or the component is re-rendered or not.

`The reson of the re-rendering is also shown in the flamegraph.`


![](./memo01.png)

![](./memo02.png)