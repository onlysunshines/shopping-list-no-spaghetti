
let store = [
  { name:'bread', completed:false },
  { name:'milk', completed:false },
  { name:'apples', completed:false },
  { name:'oranges', completed:false },
];

function renderShoppingList(){
  let html = '';
  for(let i = 0; i < store.length; i++){
    html += generateListItem(store[i]);
  }
  $('.shopping-list').html(html);
};

function addItem(){
  $('#js-shopping-list-form').on('submit', function(evt){
    evt.preventDefault();
      let listItem = $('#shopping-list-entry').val();
      store.push({name:listItem, completed:false});
      renderShoppingList();
  })
};

function generateListItem(item){
  
  return `<li>
  <span class='shopping-item'>${item.name}</span>
  <div class='shopping-item-controls'>
    <button class='shopping-item-toggle'>
      <span class='button-label'>check</span>
    </button>
    <button class='shopping-item-delete'>
      <span class='button-label'>delete</span>
    </button>
  </div>
</li>`

};

  //check item and markout
  function markItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
      $(this)
        .closest('.shopping-item-controls')
        .siblings('.shopping-item')
        .toggleClass('shopping-item__checked')
    })
  };
  
  //remove item
  function removeItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
      $(this).closest('li').remove()
    })
  };
  
  $(generateListItem);
  $(addItem);
  $(markItem);
  $(removeItem);
