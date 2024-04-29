var nomeDoHotel = prompt("Qual é o nome do Hotel?");
        alert("O nome do Hotel é " + nomeDoHotel);

        var nomeUsu = prompt("Nos diga seu nome");

        senha()

        inicio();

        function inicio() {

            var escolha = parseInt(prompt(
                'Selecione uma opção: \n' +
                '1. Reserva de Quartos \n' +
                '2. Cadastro de Hóspedes \n' +
                '3. Pesquisa de Hóspedes \n' +
                '4. Abastecimento de Carros \n' +
                '5. Reservar um evento \n' +
                '6. Hora de comer \n' +
                '7. Reserva dos Auditórios \n' +
                '8. Reserva do Restaurante \n' +
                '9. Manutenção do Ar Condicionado \n' +
                '10. Sair'
            ));

            switch (escolha) {
                case 1:
                    resv_quartos();
                    break
                case 2:
                    cadastro_hospede();
                    break
                case 3:
                    cadastroHosp2();
                    break
                case 4:
                    abst_carro();
                    break
                case 5:
                    resv_evento();
                    break
                case 6:
                    comidaParaServir();
                    break
                case 7:
                    auditorio();
                    break
                case 8:
                    resv_restaurante();
                case 9:
                    manutencao_arcondicionado();
                case 10:
                    sair();
                    break
                default:
                    erro();
            }

        }

        function senha() {

            var senhaP = parseInt(prompt("Digite a senha:"));

            if (senhaP === "" || senhaP != 2678) {
                alert("Senha incorreta, tente novamente")
                senha();

            } else {
                alert("Bem vindo ao Hotel " + nomeDoHotel + ", " + nomeUsu + ". é um imenso prazer ter você por aqui!")
                inicio();
            }
        }

        function resv_quartos() {
            var valorDiaria = parseFloat(prompt("Qual o valor padrão da diária?"))
            while (valorDiaria <= 0 || valorDiaria == " ") {
                alert("Valor inválido " + nomeUsu);
                inicio();
            }

            var diaHospedagem = parseInt(prompt("Quantas diárias serão necessárias?"))
            while (diaHospedagem <= 0 || diaHospedagem == " " || diaHospedagem >= 30) {
                alert("Valor inválido " + nomeUsu);
                inicio();
            }

            var somaDiaria = valorDiaria * diaHospedagem

            alert("O valor de " + diaHospedagem + " dias de hospedagem é de R$" + somaDiaria)

            var nomeHospede = prompt("Digite o nome do hóspede:")

            var confirmReserva = prompt(nomeUsu + ", você confirma a hospedagem de " + nomeHospede + " por " + diaHospedagem + " dias? S/N")
            if (confirmReserva == "s") {
                alert(nomeUsu + ", reserva efetuada para " + nomeHospede + ". O valor total é de R$" + somaDiaria)
            } else {
                alert(nomeUsu + ", reseva não efetuada")
            }

            inicio();
        }

        function iniciarReserva() {
            var diaHospedagem = parseInt(prompt("Quantas diárias serão necessárias?"));

            while (isNaN(diaHospedagem) || diaHospedagem <= 0 || diaHospedagem >= 30) {
                alert("Valor inválido. Por favor, insira um número válido de diárias.");
                diaHospedagem = parseInt(prompt("Quantas diárias serão necessárias?"));
            }

            var valorDiaria = 100;
            var somaDiaria = valorDiaria * diaHospedagem;

            alert("O valor de " + diaHospedagem + " dias de hospedagem é de R$" + somaDiaria);

            var nomeHospede = prompt("Digite o nome do hóspede:");

            var confirmReserva = prompt("Você confirma a hospedagem de " + nomeHospede + " por " + diaHospedagem + " dias? (S/N)");
            confirmReserva = confirmReserva.toLowerCase();
            if (confirmReserva === "s") {
                alert("Reserva efetuada para " + nomeHospede + ". O valor total é de R$" + somaDiaria);
            } else {
                alert("Reserva não efetuada.");
            }
        }

        iniciarReserva();

        inicio();

        function cadastro_hospede() {
            var listaHosp = [];
            var gratuidade = 0, meia = 0, inteira = 0;
            var somaMeia = 0, somaInteira = 0;

            var valorPadrao = parseFloat(prompt("Qual o valor padrão da diária?"));
            if (isNaN(valorPadrao) || valorPadrao <= 0) {
                alert('Informe um valor válido para a diária.');
                cadastro_hospede();
                return;
            }

            var nomeHosp = prompt("Informe o nome do hóspede ('pare' para encerrar): ");
            while (nomeHosp.toLowerCase() !== 'pare') {
                var idadeHosp = parseInt(prompt("Qual é a idade do hóspede?"));
                if (isNaN(idadeHosp) || idadeHosp <= 0) {
                    alert('Informe uma idade válida para o hóspede.');
                    nomeHosp = prompt("Informe o nome do hóspede ('pare' para encerrar): ");
                    continue;
                }

                listaHosp.push({ nome: nomeHosp, idade: idadeHosp });

                if (idadeHosp <= 6) {
                    alert(nomeHosp + " cadastrado(a) com sucesso! " + nomeHosp + " possui hospedagem gratuita!");
                    gratuidade++;
                } else if (idadeHosp >= 60) {
                    alert(nomeHosp + ", cadastrado(a) com sucesso! " + nomeHosp + " possui o direito de pagar meia!");
                    meia++;
                    somaMeia += valorPadrao / 2;
                } else {
                    alert(nomeHosp + ", cadastrado(a) com sucesso! " + nomeHosp + " irá pagar inteira!");
                    inteira++;
                    somaInteira += valorPadrao;
                }

                nomeHosp = prompt("Informe o nome do hóspede ('pare' para encerrar): ");
            }

            var total = somaMeia + somaInteira;
            alert("O total de hospedagens é: R$" + total.toFixed(2) + ". " + gratuidade + " hóspede(s) com gratuidade, " + meia + " hóspede(s) com meia e " + inteira + " hóspede(s) pagando inteira.");
            inicio();
        }

        cadastro_hospede();

        function cadastroHosp2() {
            var lista_hospedes = [];

            var escolha_hospedes = parseInt(prompt('Selecione uma opção:\n1.) Cadastrar\n2.) Pesquisar\n3.) Sair'));

            switch (escolha_hospedes) {
                case 1:
                    cadastrar_hospedes();
                    break;
                case 2:
                    pesquisar_hospedes();
                    break;
                case 3:
                    inicio();
                    break;
                default:
                    erroCa2();
            }

            function cadastrar_hospedes() {
                if (lista_hospedes.length >= 15) {
                    alert("Número máximo de hóspedes cadastrados.");
                    cadastroHosp2();
                    return;
                }

                var nome_hospede = prompt('Informe o nome da(o) hóspede:');
                if (!nome_hospede) {
                    alert("Nome inválido.");
                    cadastrar_hospedes();
                    return;
                }

                lista_hospedes.push(nome_hospede);
                alert("Hóspede " + nome_hospede + " foi cadastrado(a) com sucesso!");

                cadastroHosp2();
            }

            function pesquisar_hospedes() {
                var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
                if (lista_hospedes.includes(nome_hospede)) {
                    alert(nome_hospede + ' encontrada(o).')
                } else {
                    alert(nome_hospede + ' não foi encontrada(o).')
                }

                cadastrar_hospedes()
            }

            function erro_pesquisar_hospedes() {
                alert('Por favor, informe um número entre 1 e 3');
                cadastrar_hospedes();
            }
        }
        cadastroHosp2();

        function resv_evento() {
            let duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));

            if (isNaN(duracaoEvento) || duracaoEvento <= 0) {
                alert("Por favor, insira uma duração válida para o evento.");
                resv_evento();
                return;
            }

            let quantGar = parseInt(prompt("Quantos garçons serão necessários?"));

            if (isNaN(quantGar) || quantGar <= 0) {
                alert("Por favor, insira um número válido de garçons.");
                resv_evento();
                return;
            }

            let custoTotal = quantGar * 10.50 * duracaoEvento;

            alert("O custo total é de: R$ " + custoTotal.toFixed(2));

            let confirmacao = prompt("Gostaria de efetuar a reserva? (S/N)").toLowerCase();

            if (confirmacao === "s") {
                alert(nomeUsu + ", reserva efetuada com sucesso.");
            }

            inicio();
        }

        function comidaParaServir() {
            let quantConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));

            if (isNaN(quantConvidados) || quantConvidados <= 0) {
                alert("Valor incorreto, digite um número válido maior que zero.");
                comidaParaServir();
                return;
            }

            if (quantConvidados >= 350) {
                alert("A quantidade de convidados é superior à capacidade máxima.");
                inicio();
                return;
            }

            var cafe = 0.20 * quantConvidados;
            var agua = 0.50 * quantConvidados;
            var salgados = 7 * quantConvidados;

            var valorTotal = 0.20 * quantConvidados + 0.40 * quantConvidados + 2.38 * quantConvidados;

            alert("O evento precisará de " + cafe + " litros de café, " + agua + " litros de água e " + salgados + " salgados. O custo do evento será de R$ " + valorTotal.toFixed(2));

            let confirmReserva = prompt("Gostaria de efetuar a reserva? (S/N)").toLowerCase();

            if (confirmReserva === "s") {
                alert(nomeUsu + ", reserva efetuada com sucesso.");
            } else {
                alert("Reserva não efetuada.");
            }

            inicio();
        }

        function auditorio() {
            const capacidadeLaranja = 150;
            const capacidadeColorado = 350;

            let convidados = parseInt(prompt("Qual o número de convidados para seu evento?"));

            while (isNaN(convidados) || convidados < 0 || convidados >= capacidadeColorado) {
                alert("Número de convidados inválido.");
                convidados = parseInt(prompt("Qual o número de convidados para seu evento?"));
            }

            if (convidados < capacidadeLaranja) {
                alert("Use o auditório Laranja.");

                if (convidados > capacidadeLaranja) {
                    let cadeirasAdd = convidados - capacidadeLaranja;
                    alert("Inclua " + cadeirasAdd + " cadeiras adicionais.");
                }
            } else {
                alert("Use o auditório Colorado.");
            }

            let confirmReAud = prompt("Gostaria de efetuar a reserva? (S/N)").toLowerCase();

            if (confirmReAud === "s") {
                alert(nomeUsu + ", reserva efetuada com sucesso.");
            }

            inicio();
        }

        function resv_restaurante() {
            let dia = prompt("Qual é o dia do seu evento?").toLowerCase();

            if (["segunda", "terca", "quarta", "quinta", "sexta"].includes(dia)) {
                let horario = parseInt(prompt("Qual o horário do seu evento?"));

                if (horario < 7 || horario > 23) {
                    alert("Não estamos disponíveis nesse horário.");
                    resv_restaurante();
                    return;
                }

            } else if (dia === "sabado" || dia === "domingo") {
                let horario = parseInt(prompt("Qual é o horário do evento?"));

                if (horario < 7 || horario > 15) {
                    alert("Não estamos disponíveis nesse horário.");
                    resv_restaurante();
                    return;
                }

            } else {
                alert("Dia inválido. Por favor, insira um dia válido.");
                resv_restaurante();
                return;
            }

            var empresa = prompt("Nos informe o nome da empresa: ");
            alert("Restaurante reservado para a empresa " + empresa + " no dia " + dia + " às " + horario + " horas.");

            inicio();
        }

        function abst_carro() {
            const litrosCombustivel = 42;

            let alcoolAzevedo = parseFloat(prompt("Qual o valor do álcool no posto Azevedo Oil?")) * litrosCombustivel;
            let gasolinaAzevedo = parseFloat(prompt("Qual o valor da gasolina no posto Azevedo Oil?")) * litrosCombustivel;
            let alcoolDri = parseFloat(prompt("Qual o valor do álcool no posto Dri Petrol?")) * litrosCombustivel;
            let gasolinaDri = parseFloat(prompt("Qual o valor da gasolina no posto Dri Petrol?")) * litrosCombustivel;

            if (gasolinaAzevedo < gasolinaDri) {
                if (alcoolAzevedo <= (gasolinaAzevedo - (gasolinaAzevedo * 0.3))) {
                    alert(nomeUsu + ", é mais barato abastecer com álcool no posto Azevedo Oil.");
                } else {
                    alert(nomeUsu + ", é mais barato abastecer com gasolina no posto Azevedo Oil.");
                }
            } else {
                if (alcoolDri <= (gasolinaDri - (gasolinaDri * 0.3))) {
                    alert(nomeUsu + ", é mais barato abastecer com álcool no posto Dri Petrol.");
                } else {
                    alert(nomeUsu + ", é mais barato abastecer com gasolina no posto Dri Petrol.");
                }
            }

            inicio();
        }

        function manutencao_arcondicionado() {
            let mais_barata = "";
            let valor_mais_barato = Infinity;

            do {
                let nome_empresa = prompt("Qual o nome da empresa?");
                let valor_aparelho = parseFloat(prompt("Qual o valor do aparelho?"));
                let quantidade_aparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
                let desconto = parseInt(prompt("Qual o percentual de desconto?"));
                let minimo_aparelhos = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
                let valor_total = valor_aparelho * quantidade_aparelhos;

                if (quantidade_aparelhos >= minimo_aparelhos) {
                    valor_total -= (valor_total * desconto / 100);
                }

                if (valor_total < valor_mais_barato) {
                    mais_barata = nome_empresa;
                    valor_mais_barato = valor_total;
                }

                alert("O serviço de " + nome_empresa + " custará R$" + valor_total.toFixed(2));
                confirmacao_manutencao = prompt("Deseja informar novos dados, " + nomeUsu + "? (S/N)");
            } while (confirmacao_manutencao.toLowerCase() === "s");

            alert("O orçamento de menor valor é da empresa " + mais_barata + " com R$" + valor_mais_barato.toFixed(2));

            inicio();
        }

        function erro() {
            alert('Por favor, informe um número entre 1 e 10.');
            inicio();
        }

        function sair() {
            var confirma = confirm('Você deseja sair?');
            if (confirma) {
                alert("Muito obrigado e até logo, " + nomeUsu + ".");
                window.close();
            } else {
                inicio();
            }
        }

        function erroCa2() {
            alert('Por favor, informe um número entre 1 e 3.');
            cadastroHosp2();
        }