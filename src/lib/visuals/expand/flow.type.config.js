import { config } from '../../config/index'


export default {

    view() {

        let viewWidth = config.screenSize.width
        let viewHeight = config.screenSize.height
        let viewTop = 0
        let viewLeft = 0

        //宽度100%的情况下
        //如果是flow页面处理,全屏
        if (config.visualMode === 2) {
            if (config.pptVertical) {
                //其他页面上下压缩，左右100%
                //flows页面宽高都是100%
                if (config.screenVertical) {
                    viewWidth = config.screenSize.width
                    viewHeight = config.screenSize.height
                    viewTop = 0
                } else {
                    viewWidth = config.viewSize.width
                    viewHeight = config.viewSize.height
                    viewTop = 0
                }
            }
            return {
                viewWidth,
                viewHeight,
                viewTop
            }
        }

        //高度100%的情况下
        //flow下,设置容易宽度
        if (config.visualMode === 3) {
            if (config.pptVertical) {
                //竖版竖版
                //高度100%,宽度会存在溢出
                //所以需要修复flow页面是全屏状态
                if (config.screenVertical) {
                    viewWidth = config.screenSize.width
                } else {

                }
            }
        }

        return {
            viewWidth,
            viewHeight,
            viewTop,
            viewLeft
        }
    }


    /**
     * 容器translate的规则
     * @param  {[type]} data       [description]
     * @param  {[type]} usefulData [description]
     * @return {[type]}            [description]
     */
    , translate(data, usefulData) {
        if (config.visualMode === 3) {
            return {
                left(offsetLeft) {
                    const middle = usefulData.getStyle('middle')
                    if (middle && middle.isFlows) {
                        return -(middle.viewWidth + middle.offset)
                    }
                },
                middle(originalOffset) {
                    if (data.isFlows) {
                        return -config.viewSize.left
                    }
                },
                right(originalOffset) {
                    //获取上一页的styles状态
                    //如果上一页是通过flow方式处理过的
                    //当前页面小姐要不去重新处理
                    const middle = usefulData.getStyle('middle')
                    if (middle && middle.isFlows) {
                        return middle.viewWidth + middle.offset
                    }
                }
            }
        }
    }


    /**
     * 滑动值
     * @return {[type]} [description]
     */
    , distance() {
        if (config.visualMode === 3) {
            return {
                flipMove: {
                    left(data) {
                        const leftFlow = data.$$checkFlows(data.$$leftIndex)
                        if (leftFlow) {
                            data.left = data.$$left + Math.abs(config.viewSize.left) * 2
                        }
                    },
                    right(data) {
                        const middleFlow = data.$$checkFlows(data.$$pageIndex)
                        if (middleFlow) {
                            data.right = data.$$right - Math.abs(config.viewSize.left) * 2
                        }
                    }
                },
                flipOver: {
                    left(data) {
                        const leftFlow = data.$$checkFlows(data.$$leftIndex)
                        if (leftFlow) {
                           data.left = -config.viewSize.left
                        }
                    },
                    right(data) {
                        const rightFlow = data.$$checkFlows(data.$$rightIndex)
                        //当前正常页面，下一页flow
                        if (rightFlow) {
                            data.right = Math.abs(config.viewSize.left)
                        }

                    }
                }
            }
        }
    }
}
