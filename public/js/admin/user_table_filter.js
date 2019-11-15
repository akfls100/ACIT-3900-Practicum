filterUsers = () => {
    let filter = "plantClassification";
    let name = $(`input[name=${filter}]:checked`).prop('id') || '';

    $('.account_table').hide();
    $(`.account_table .${filter}:contains(${name})`).closest("td").parent().show();

    // Show all plantClassifications
    let radioValue = $(`input[type=radio][name=${filter}]:checked`).attr('id');

    if (radioValue == "all") {
        $('.account_table').show();
    }
};

$('input[type="radio"]').change(filterUsers);
