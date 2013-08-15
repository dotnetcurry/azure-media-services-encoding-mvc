var hub = $.connection.jobStatusHub;
hub.client.updateJobStatus = function (assetId, statusMessage)
{
    var asset = $("#AssetId").val();
    if (asset == assetId)
    {
        $("#statusMessage").text(statusMessage);
    }
}
hub.client.updateJobCompleted = function (assetId, statusMessage)
{
    var asset = $("#AssetId").val();
    $("#encode").show();
    if (asset == assetId)
    {
        $("#statusMessage").text(statusMessage);
    }
    setTimeout(function ()
    {
        $("#statusPanel").fadeOut(1000);
    }, 2000);
}

$("#statusPanel").hide();
var progressbar = $("#progress").progressbar();

$.connection.hub.start().done(function ()
{
    $(document).on("click", "#encode", null, function ()
    {
        $("#statusMessage").text("");
        $("#statusPanel").fadeIn(1);
        $("#encode").hide();
        var jsonData = {
            Id: $("#Id").val(),
            AssetId: $("#AssetId").val(),
            EncodingType: $("#EncodingType").val()
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/Media/Encode",
            data: JSON.stringify(jsonData)
        }).success(function ()
        {
            $("#statusMessage").text("Job Started");
        }).fail(function ()
        {
            ("#statusMessage").text("Failed to start encoding");
            $("#encode").show();
        });
    });
});

$(document).ready(function ()
{
    progressbar.progressbar("option", "value", false);
});
