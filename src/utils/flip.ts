/**
 * 将指定的HTML元素水平翻转，并在指定的时间内完成动画。
 * @param element 要翻转的HTML元素。
 * @param duration 动画持续时间（毫秒），默认为1000毫秒。
 */
export function flip(element: HTMLElement, duration: number = 1000) {
    // 获取元素的初始位置
    const startX = element.offsetLeft;
    const startY = element.offsetTop;
    // 计算元素的结束位置
    const endX = startX + element.offsetWidth;
    const endY = startY + element.offsetHeight;

    // 记录动画开始时间
    const startTime = performance.now();

    // 定义动画函数
    function animate(currentTime: number): void {
        // 计算动画已进行的时间
        const elapsedTime = currentTime - startTime;
        // 计算动画进度
        const progress = Math.min(elapsedTime / duration, 1);

        // 根据动画进度更新元素位置
        element.style.transform = `translate(${startX + (endX - startX) * progress}px, ${
            startY + (endY - startY) * progress
        }px)`;

        // 如果动画未完成，继续请求下一帧动画
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // 动画完成后，恢复元素的初始状态
            element.style.transform = "";
        }
    }

    // 请求第一帧动画
    requestAnimationFrame(animate);
}
