

$(document).ready(function(){	
	$("#selEstado").change(function(){
		
		var estado = $("#selEstado").val();
		
		if(estado == "DF"){
				$('#selCidade').empty();
				$('#mapaImg').empty();
				$('#mapaImg').append('<img id="mapaDf" src="images/mapa-df.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
				$('#selCidade').append($('<option></option>').val("DF1").html("Brasilia"));
				$('#selCidade').append($('<option></option>').val("DF2").html("Taguatinga"));
				$('#selCidade').append($('<option></option>').val("DF3").html("Rodoviária (Nova)"));
				
		
		}else if(estado == "XX" ){		
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapa" src="images/mapa.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
				
		}else if(estado == "ES" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaEs" src="images/mapa-es.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("ES1").html("Alegre"));
			$('#selCidade').append($('<option></option>').val("ES2").html("Bom Jesus do norte"));
			$('#selCidade').append($('<option></option>').val("ES3").html("Cachoeiro de Itapemirim"));
			$('#selCidade').append($('<option></option>').val("ES4").html("Castelo"));
			$('#selCidade').append($('<option></option>').val("ES5").html("Guaçuí"));
			$('#selCidade').append($('<option></option>').val("ES6").html("Ibatiba"));
			$('#selCidade').append($('<option></option>').val("ES7").html("Venda Nova do Imigrante"));
			$('#selCidade').append($('<option></option>').val("ES8").html("Vitória -  Cariacica"));
			$('#selCidade').append($('<option></option>').val("ES9").html("Vitória -  Serra"));
			$('#selCidade').append($('<option></option>').val("ES10").html("Vitória - Viana"));
			$('#selCidade').append($('<option></option>').val("ES11").html("Vitória - Vila Velha"));
		
			
			
			
			
		}else if(estado == "GO" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaGo" src="images/mapa-go.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("GO1").html("Anápolis"));
			$('#selCidade').append($('<option></option>').val("GO2").html("Aparecida de Goiânia"));
			$('#selCidade').append($('<option></option>').val("GO3").html("Bom Jesus"));
			$('#selCidade').append($('<option></option>').val("GO4").html("Cachoeira Alta"));
			$('#selCidade').append($('<option></option>').val("GO5").html("Caçú"));
			$('#selCidade').append($('<option></option>').val("GO6").html("Caldas Novas"));
			$('#selCidade').append($('<option></option>').val("GO7").html("Corumbaíba"));
			$('#selCidade').append($('<option></option>').val("GO8").html("Castelândia"));
			$('#selCidade').append($('<option></option>').val("GO9").html("Catalão"));
			$('#selCidade').append($('<option></option>').val("GO10").html("Edeia"));
			$('#selCidade').append($('<option></option>').val("GO11").html("Goiânia - Garagem"));
			$('#selCidade').append($('<option></option>').val("GO12").html("Goiânia - Guichê"));
			$('#selCidade').append($('<option></option>').val("GO13").html("Goiatuba"));
			$('#selCidade').append($('<option></option>').val("GO14").html("Ipameri"));
			$('#selCidade').append($('<option></option>').val("GO15").html("Iporã"));
			$('#selCidade').append($('<option></option>').val("GO16").html("Itumbiara"));
			$('#selCidade').append($('<option></option>').val("GO17").html("Jataí"));
			$('#selCidade').append($('<option></option>').val("GO18").html("Joviânia"));
			$('#selCidade').append($('<option></option>').val("GO19").html("Leopoldo Bulhões"));
			$('#selCidade').append($('<option></option>').val("GO20").html("Luziânia"));
			$('#selCidade').append($('<option></option>').val("GO21").html("Maurilândia"));
			$('#selCidade').append($('<option></option>').val("GO22").html("Mineiros"));
			$('#selCidade').append($('<option></option>').val("GO23").html("Morrinhos"));
			$('#selCidade').append($('<option></option>').val("GO24").html("Orizona"));
			$('#selCidade').append($('<option></option>').val("GO25").html("Piracanjuba"));
			$('#selCidade').append($('<option></option>').val("GO26").html("Pires do Rio"));
			$('#selCidade').append($('<option></option>').val("GO27").html("Pontalina"));
			$('#selCidade').append($('<option></option>').val("GO28").html("Rio Verde"));
			$('#selCidade').append($('<option></option>').val("GO29").html("São Luis de Montes Belos"));
			$('#selCidade').append($('<option></option>').val("GO30").html("São Simão"));
			$('#selCidade').append($('<option></option>').val("GO31").html("Santa Helena"));
			$('#selCidade').append($('<option></option>').val("GO32").html("Silvânia"));
			$('#selCidade').append($('<option></option>').val("GO33").html("Vianópolis"));
			$('#selCidade').append($('<option></option>').val("GO34").html("Vicentópolis"));
			
			
			
			
		}else if(estado == "MS" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaMs" src="images/mapa-ms.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("MS1").html("Campo Grande"));
			$('#selCidade').append($('<option></option>').val("MS2").html("Dourados"));
			$('#selCidade').append($('<option></option>').val("MS3").html("Nova Alvorada do Sul"));
			$('#selCidade').append($('<option></option>').val("MS4").html("Rio Brilhante"));
			$('#selCidade').append($('<option></option>').val("MS5").html("Três Lagoas"));
			
		}else if(estado == "MT" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaMt" src="images/mapa-mt.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("MT1").html("Barra do Garça"));
		
		}else if(estado == "MG" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaMg" src="images/mapa-mg.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("MG1").html("Araguari"));
			$('#selCidade').append($('<option></option>').val("MG2").html("Araxá"));
			$('#selCidade').append($('<option></option>').val("MG3").html("Belo Horizonte"));
			$('#selCidade').append($('<option></option>').val("MG4").html("Belo Horizonte - Rod."));
			$('#selCidade').append($('<option></option>').val("MG5").html("Campina Verde"));
			$('#selCidade').append($('<option></option>').val("MG6").html("Canápolis"));
			$('#selCidade').append($('<option></option>').val("MG7").html("Capitólio"));
			$('#selCidade').append($('<option></option>').val("MG8").html("Centralina"));
			$('#selCidade').append($('<option></option>').val("MG9").html("Coromandel"));
			$('#selCidade').append($('<option></option>').val("MG10").html("Frutal"));
			$('#selCidade').append($('<option></option>').val("MG11").html("Guimarânia"));
			$('#selCidade').append($('<option></option>').val("MG12").html("Guarda Mor"));
			$('#selCidade').append($('<option></option>').val("MG13").html("Ibiá"));
			$('#selCidade').append($('<option></option>').val("MG14").html("Iraí de Minas"));
			$('#selCidade').append($('<option></option>').val("MG15").html("Itaú de Minas"));
			$('#selCidade').append($('<option></option>').val("MG16").html("Ituitaba"));
			$('#selCidade').append($('<option></option>').val("MG17").html("Iturama"));
			$('#selCidade').append($('<option></option>').val("MG18").html("Jequitaí"));
			$('#selCidade').append($('<option></option>').val("MG19").html("Juiz de Fora"));
			$('#selCidade').append($('<option></option>').val("MG20").html("Luislândia"));
			$('#selCidade').append($('<option></option>').val("MG21").html("Manhuaçu"));
			$('#selCidade').append($('<option></option>').val("MG22").html("Monte Alegre de Minas"));
			$('#selCidade').append($('<option></option>').val("MG23").html("Monte Carmelo"));
			$('#selCidade').append($('<option></option>').val("MG24").html("Montes Claros"));
			$('#selCidade').append($('<option></option>').val("MG25").html("Nova Ponte"));
			$('#selCidade').append($('<option></option>').val("MG26").html("Paracatu"));
			$('#selCidade').append($('<option></option>').val("MG27").html("Passos"));
			$('#selCidade').append($('<option></option>').val("MG28").html("Patos de Minas - Gar."));
			$('#selCidade').append($('<option></option>').val("MG29").html("Patos de Minas - Rod."));
			$('#selCidade').append($('<option></option>').val("MG30").html("Patrocínio"));
			$('#selCidade').append($('<option></option>').val("MG31").html("Perdizes"));
			$('#selCidade').append($('<option></option>').val("MG32").html("Pirapora"));
			$('#selCidade').append($('<option></option>').val("MG33").html("Piumhí"));
			$('#selCidade').append($('<option></option>').val("MG34").html("Prata"));
			$('#selCidade').append($('<option></option>').val("MG35").html("Realeza"));
			$('#selCidade').append($('<option></option>').val("MG36").html("São Gotardo"));
			$('#selCidade').append($('<option></option>').val("MG37").html("São Sebastião do Paraíso"));
			$('#selCidade').append($('<option></option>').val("MG38").html("Serra do Salitre"));
			$('#selCidade').append($('<option></option>').val("MG39").html("Sete Lagoas"));
			$('#selCidade').append($('<option></option>').val("MG40").html("Tupaciguara"));
			$('#selCidade').append($('<option></option>').val("MG41").html("Uberaba"));
			$('#selCidade').append($('<option></option>').val("MG42").html("Uberlândia"));
			$('#selCidade').append($('<option></option>').val("MG43").html("Varjão de Minas"));
		
		}else if(estado == "PR" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaPr" src="images/mapa-pr.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("PR1").html("Abatiá"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Andirá"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Apucarana"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Araponga"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Arapoti"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Araucária"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Bandeirantes"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Cambará"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Cambé"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Campos Mourão"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Carlópolis"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Cascavel"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Castro"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Cianorte"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Colombo"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Congonhinhas"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Conselheiro Mairink"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Cornélio Procópio"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Curitiba"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Curiúva"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Florestópolis"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Foz do iguaçu"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Guapirama"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ibaiti"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ibiporã"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Itambaracá"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Jaboti"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Jacarezinho"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Jaguapitã"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Jaguariaíva"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Jandaia do Sul"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Japira"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Joaquim Távora"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Londrina"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Marialva"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Maringá"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Nova Fátima"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Paisandu"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Pinhais"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Pinhalão"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Piraí do Sul"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ponta Grossa"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Porecatu"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Quatiguá"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ribeirão Claro"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ribeirão do Pinhal"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Rolândia"));
			$('#selCidade').append($('<option></option>').val("PR1").html("São José dos Pinhais"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Santana do Itararé"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Sengés"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Santo Antônio da Platina"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Sarandi"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Siqueira Campos"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Telemaco Borba"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Tibagi"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Tomazina"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Ventania"));
			$('#selCidade').append($('<option></option>').val("PR1").html("Wenceslau Bráz"));
		}else if(estado == "RJ" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaRj" src="images/mapa-rj.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("RJ1").html("Angra dos Reis"));
			$('#selCidade').append($('<option></option>').val("RJ2").html("Campos de Goytacazes"));
			$('#selCidade').append($('<option></option>').val("RJ3").html("Parati"));
			$('#selCidade').append($('<option></option>').val("RJ4").html("Petrópolis"));
			$('#selCidade').append($('<option></option>').val("RJ5").html("Rio de Janeiro"));
			$('#selCidade').append($('<option></option>').val("RJ6").html("Belford Roxo"));
			$('#selCidade').append($('<option></option>').val("RJ7").html("Duque de Caxias"));
			$('#selCidade').append($('<option></option>').val("RJ8").html("Mesquita"));
			$('#selCidade').append($('<option></option>').val("RJ9").html("Nilópolis"));
			$('#selCidade').append($('<option></option>').val("RJ10").html("Niterói"));
			$('#selCidade').append($('<option></option>').val("RJ11").html("Nova Iguaçu"));
			$('#selCidade').append($('<option></option>').val("RJ12").html("São Gonçalo"));
			$('#selCidade').append($('<option></option>').val("RJ13").html("São João de Meriti"));
		
		}else if(estado == "RS" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaRs" src="images/mapa-rs.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("RS1").html("Porto Alegre"));
		
		}else if(estado == "SC" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaSc" src="images/mapa-sc.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("SC1").html("Joinville"));
			$('#selCidade').append($('<option></option>').val("SC2").html("Florianópolis"));
			
		
		}else if(estado == "SP" ){
			$('#selCidade').empty();
			$('#mapaImg').empty();
			$('#mapaImg').append('<img id="mapaSp" src="images/mapa-sp.png" style="text-align:center; margin: 40px 0px 0px 40px" width="340" height="373" border="0"/>')
			$('#selCidade').append($('<option></option>').val("SP1").html("Adamantina"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Águas de Santa Bárbara"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Águas de São Pedro"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Alto da Serra - Angatuba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Americana"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Andradina"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Araçatuba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Araraquara"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Assis"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Avaré"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Bady Bassit"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Barra Bonita"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Barretos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Barueri"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Bauru"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Bernardino de Campos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Birigui"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Bocaina"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Bomfim Paulista"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Brotas"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cafelândia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Campinas"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Carapicuíba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Castilho"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Catanduva"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cedral"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cerqueira César"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cerquilho"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Chavantes"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Coronel Macedo"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cotia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Cravinhos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Diadema"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Embú das Artes"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Fartura"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ferraz de Vasconcelos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Franca"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Guaraçaí"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Guararapes"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Guarulhos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Herculândia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Hortolândia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ilha Solteira"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ipaussu"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itaberá"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itaí"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itapecerica da Serra"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itapetininga"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itapeva"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itapevi"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itaporanga"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Itaquaquecetuba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Jaboticabal"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Jandira"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Jardinópolis"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Jaú"));
			$('#selCidade').append($('<option></option>').val("SP1").html("José Bonifácio"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Jundiaí"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Limeira"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Lins"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Manduri"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Marília"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Mauá"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Mirassol"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Mirandópolis"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Mogi das Cruzes"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Nova Odessa"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Sumaré"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Oriente"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Osasco"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ourinhos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Paraguaçu Paulista"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Paranapanema"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Pardinho"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Paulínia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Penápolis"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Pereira Barreto"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Piracicaba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Piraju"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Pirajuí"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Poá"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Pompéia"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Posto Trevo Itaí/Avaré"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Promissão"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Quintana"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ribeirão Pires"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Ribeirão Preto"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Rio das Pedras"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Saltinho"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santana do Parnaíba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santa Maria da Serra"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santo André"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santos"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São Bernardo do Campo"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santa Bárbara D'Oeste"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São Caetano do Sul"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São José do Rio Preto"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São Manuel"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São Paulo"));
			$('#selCidade').append($('<option></option>').val("SP1").html("São Pedro"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Santa Cruz do Rio Pardo"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Sarutaiá"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Sertãozinho"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Sorocaba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Sumaré"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Suzano"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Taboão da Serra"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Taguaí"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Taquarituba"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Tietê"));
			$('#selCidade').append($('<option></option>').val("SP1").html("Torrinha"));
			}
		
		
		
		
		
	});
})