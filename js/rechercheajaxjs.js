// JavaScript Document
$(function(){
	//"Surveillance du champ "Recherche" avec la méthode jQuery "keyup"
	$("#chercher").keyup(function(){
		//on efface le champ résultat
		$("#resultat").html('');
		var data='nom='+$(this).val();
//alert(data);
		//Si le champ "Recherche" contient plus d'un caractère, l'appel Ajax est déclenché
		if ($("#chercher").val().length>0){
			$.ajax({
				type:'GET',
				url:'recherche.php',
				
				data: data,
				//Avant d'envoyer les infos, on fait apparaître le loader
				beforeSend:function(){$("img[alt='loader']").css("display","inline");},
				//Le script php nous a renvoyé du HTML (paramètre "code_html" 
				//contenant le fruit de la recherche dans la base de données)
				success:function(resultat_de_la_page_php){
					//on fait disparaître le loader
					$("img[alt='loader']").css("display","none");
					//on fait apparaître le résultat dans la div d'id "resultat"
					$("#resultat").html(resultat_de_la_page_php);

				}
			});			
		}
		else {
			$("#resultat").html('');
		}
	});	
});