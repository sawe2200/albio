$(document).ready(function() {
    $('#calculateButton').click(function() {
        // Get input values
        var rawMaterialCost1 = parseFloat($('#rawMaterialCost1').val());
        var rawMaterialCost2 = parseFloat($('#rawMaterialCost2').val());
        var refiningFee = parseFloat($('#refiningFee').val());
        var refinedItemValue = parseFloat($('#refinedItemValue').val());
        var returnRate = parseFloat($('#returnRate').val());
        var amountToRefine = parseFloat($('#amountToRefine').val());

        // Calculate total costs and profits
        var totalRawMaterialCost = (rawMaterialCost1 + rawMaterialCost2) * amountToRefine;
        var totalRefiningFee = refiningFee * amountToRefine;
        var totalRefinedValue = (refinedItemValue * amountToRefine) * (1 + returnRate / 100);
        var profit = totalRefinedValue - (totalRawMaterialCost + totalRefiningFee);

        // Display results
        $('#totalRawMaterialCost').text(totalRawMaterialCost.toFixed(2));
        $('#totalRefiningFee').text(totalRefiningFee.toFixed(2));
        $('#totalRefinedValue').text(totalRefinedValue.toFixed(2));
        $('#profit').text(profit.toFixed(2));
    });
});
