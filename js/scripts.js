$(document).ready(function() {
    
  $('#edit-search-theme-form-header').val(Drupal.t('Keyword Search'));
  $('#edit-search-theme-form-header').focus(function() {
      if ($(this).val() == Drupal.t('Keyword Search')) $(this).val('');
  });
  $('#edit-search-theme-form-header').blur(function() {
      if ($(this).val() == '') $(this).val(Drupal.t('Keyword Search'));
  }); 
});