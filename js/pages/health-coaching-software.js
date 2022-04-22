

    const faqQuestion = document.querySelectorAll('.faq-question')
    const hiddenBlocks = document.querySelectorAll('.faq-answer-wrapper')
    
    faqQuestion.forEach((elem, numb) => {
      elem.addEventListener("click", function () {
        let parentElem = elem.closest('.faq-item')
        let hiddenBlock = parentElem.querySelector(".faq-answer-wrapper")
        let hiddenBlockHeight = hiddenBlock.scrollHeight 
        hiddenBlocks.forEach((item, ind) => {
          if(numb === ind) {
            if(item.classList.contains('active')) {
              item.closest('.faq-item').classList.remove('active')
              item.classList.remove('active')
              item.style.height = 0 + 'px'
            } else {
              item.closest('.faq-item').classList.add('active')
              item.classList.add('active')
              item.style.height = hiddenBlockHeight + 'px'
            }
          } else { 
            item.closest('.faq-item').classList.remove('active')
            item.classList.remove('active')
            item.style.height = 0 + 'px'
          }
        })  
      })
    })
    