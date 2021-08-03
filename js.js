	<script>
		var ANADOLU = new Array();
		$(document).ready(function () {
			var quarterType = '';
			var quarterName = '';
			$('.bizim .group-header[data-level="district"]').each(function (index, header) {
				var districtTyle = $(this).find('span').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
				$(this).find('span').remove();
				var districtName = $(this).text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
				var subDistrictType = '';
				var subDistrictName = '';
				$('li[data-parentlabel="' + districtName + '"][data-level="district"]').each(function (i, subDistrict) {
					$(this).find('i').remove();
					subDistrictType = $(this).find('span').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
					$(this).find('span').remove();
					subDistrictName = $(this).text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');





					$('li[data-parentlabel="' + subDistrictName + '"][data-level="quarter"]').each(function (i, quarter) {
						$(this).find('i').remove();
						quarterName = $(this).find('a').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');


					});

											ANADOLU.push({
					'CITY': 'İSTANBUL ANADOLU',
					'PARENT_DISTRICT_NAME': districtName,
					'PARENT_DISTRICT_TYPE': districtTyle,
					'SUB_DISTRICT_NAME': subDistrictName,
					'SUB_DISTRICT_TYPE': subDistrictType,
					'QUARTER_NAME': quarterName
				});
				});

			});
			console.log(ANADOLU);
		});



						var AVRUPA = new Array();
		$(document).ready(function () {
			var quarterType = '';
			var quarterName = '';
			$('.sizin .group-header[data-level="district"]').each(function (index, header) {
				var districtTyle = $(this).find('span').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
				$(this).find('span').remove();
				var districtName = $(this).text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
				var subDistrictType = '';
				var subDistrictName = '';
				$('li[data-parentlabel="' + districtName + '"][data-level="district"]').each(function (i, subDistrict) {
					$(this).find('i').remove();
					subDistrictType = $(this).find('span').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');
					$(this).find('span').remove();
					subDistrictName = $(this).text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');





					$('li[data-parentlabel="' + subDistrictName + '"][data-level="quarter"]').each(function (i, quarter) {
						$(this).find('i').remove();
						quarterName = $(this).find('a').text().replaceAll('\t', '').replaceAll('\n', '').split('\r\n');


					});
											AVRUPA.push({
					'CITY': 'İSTANBUL AVRUPA',
					'PARENT_DISTRICT_NAME': districtName,
					'PARENT_DISTRICT_TYPE': districtTyle,
					'SUB_DISTRICT_NAME': subDistrictName,
					'SUB_DISTRICT_TYPE': subDistrictType,
					'QUARTER_NAME': quarterName
				});
				});


			});
			console.log(AVRUPA);


			console.clear();

			console.log({'ANADOLU : ':ANADOLU, 'AVRUPA : ':AVRUPA});

		});
	</script>
