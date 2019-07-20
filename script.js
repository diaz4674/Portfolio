//SkillsButton Section 
$(".skillsButton").on( 'click', function() {
  $(".hiddenSkills").css(
{display:'block',
 position: 'relative',
 
  }) 
  $(".skillsButton").css({display:'none'})
})

 $(function() {
   $('.project-video').hover(function() {
     this.play();
   }, function() {
     this.pause()
   });
 });