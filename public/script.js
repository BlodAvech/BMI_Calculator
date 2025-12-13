$(document).ready(function() {

    $('#bmiForm').submit(function(event) {
        
        event.preventDefault();

        const formData = $(this).serialize();

        $.ajax({
            url: '/calculate', 
            method: 'POST',    
            data: formData,    
            dataType: 'json',  
            
            success: function(data) {
				const bmi = Math.round(data.bmi * 10) / 10;
				$("#answer").text(bmi);
				const $result = $("#result");

				if(bmi < 18.5)
				{
					$result.text("Underweigh");
					$result.css('color' , '#7AE7C7');
				}else if(bmi < 25)
				{
					$result.text("Normal");
					$result.css('color' , '#88D498');
				}else if(bmi < 30)
				{
					$result.text("Overweight");
					$result.css('color' , '#D58936');
				}else if(bmi >= 30)
					{
					$result.text("Obese");
					$result.css('color' , '#FF928B');
				}
            },
            error: function(error) {
                console.error('Ошибка при выполнении запроса:', error);
                $('#resultContainer').text('Произошла ошибка.');
            }
        });
    });
});
