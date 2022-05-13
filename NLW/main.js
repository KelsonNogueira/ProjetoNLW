function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  }
  if (scrollY == 0) {
    navigation.classList.remove('scroll');
  }
}