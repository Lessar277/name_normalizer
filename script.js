$("#submitbtn").click(function () {
	$('#list').empty();
	//split the list of names based on line breaks
	var list = "";
	var textAreaValue = $("#txtMessage").val();
	var badNamesArray = textAreaValue.split("\n");
	for (i = 0; i < badNamesArray.length; i++) {
		var badName = badNamesArray[i].toLowerCase().replace(/\bm(iss|s|rs|r)\.?/gi, "").split(" ");
		var goodName = [];
		for (j = 0; j < badName.length; j++) {
			var firstChar = badName[j].charAt(0);
			var x = badName[j].replace(firstChar, firstChar.toUpperCase());
			goodName.push(x);
		}
		goodName = goodName.join(" ");
		list += "<li>" + goodName + "</li>";

	}
	$('#list').append(list);
});
