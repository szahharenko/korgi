export const wrapLetters = (word: string) => word.split('').map( (l,i) => <span key={i}>{ l === '' ? '&nbsp;' : l}</span>);

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    return await response.json();
}

export const scrollToPositionSmoothly = (pos : number, time: number  = 700) => {
    var currentPos = window.pageYOffset;
    var start = 0;
    window.requestAnimationFrame(function step(currentTime) {
        start = !start ? currentTime : start;
        var progress = currentTime - start;
        if (currentPos < pos) {
            window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
        } else {
            window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
        }
        if (progress < time) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, pos);
        }
    });
}

export const smoothScroll = (e: React.MouseEvent, selector: string) => {
    e.preventDefault();
    const target = document.getElementById(selector);
    const y = target?.offsetTop || 0;
    scrollToPositionSmoothly(y);
}

declare global {
    interface Window {
      gtag: Function;
    }
  }
export const GA = window.gtag || function() { };
