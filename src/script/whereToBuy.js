document.addEventListener('DOMContentLoaded', function() {
    const h4Elements = document.querySelectorAll('h4');
    h4Elements.forEach((h4, index) => {
    const text = h4.innerText;
    const checkboxId = `checkbox${index}`;
    h4.innerHTML = `
      <div class="checkbox-container relative inline-block" onmouseover="checkCheckbox(true, '${checkboxId}')" onmouseout="checkCheckbox(false, '${checkboxId}')">
        <input type="checkbox" id="${checkboxId}" class="absolute hidden">
        <label for="${checkboxId}" onclick="toggleCheckbox(event, '${checkboxId}')" class="cursor-pointer pl-7" >${text}</label>
      </div>
    `;
  });
});

function checkCheckbox(checked, checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  if (!checkbox.classList.contains('toggled')) {
    checkbox.checked = checked;
  }
}

function toggleCheckbox(event, checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  checkbox.classList.toggle('toggled');
  checkbox.checked = !checkbox.checked;
  event.stopPropagation();
}
