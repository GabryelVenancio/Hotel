import java.util.ArrayList;
import java.util.Scanner;

public class HotelSystem {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual é o nome do Hotel?");
        String nomeDoHotel = scanner.nextLine();

        System.out.println("Nos diga seu nome:");
        String nomeUsu = scanner.nextLine();

        senha(nomeDoHotel, nomeUsu);
    }

    static void inicio(String nomeDoHotel, String nomeUsu) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Selecione uma opção:");
        System.out.println("1. Reserva de Quartos");
        System.out.println("2. Cadastro de Hóspedes");
        System.out.println("3. Pesquisa de Hóspedes");
        System.out.println("4. Abastecimento de Carros");
        System.out.println("5. Reservar um evento");
        System.out.println("6. Hora de comer");
        System.out.println("7. Reserva dos Auditórios");
        System.out.println("8. Reserva do Restaurante");
        System.out.println("9. Manutenção do Ar Condicionado");
        System.out.println("10. Sair");

        int escolha = scanner.nextInt();
        switch (escolha) {
            case 1:
                resv_quartos(nomeUsu);
                break;
            case 2:
                cadastro_hospede(nomeUsu);
                break;
            case 3:
                pesquisa_hospede();
                break;
            case 4:
                abst_carro();
                break;
            case 5:
                resv_evento();
                break;
            case 6:
                hora_comer();
                break;
            case 7:
                resv_auditorio();
                break;
            case 8:
                resv_rest();
                break;
            case 9:
                manutencao_ar_condicionado();
                break;
            case 10:
                sair();
                break;
            default:
                erro();
        }
    }

    static void senha(String nomeDoHotel, String nomeUsu) {
        Scanner scanner = new Scanner(System.in);
        int senhaP;

        do {
            System.out.println("Digite a senha:");
            senhaP = scanner.nextInt();
            if (senhaP != 2678) {
                System.out.println("Senha incorreta, tente novamente");
            } else {
                System.out.println("Bem-vindo ao Hotel " + nomeDoHotel + ", " + nomeUsu + ". É um prazer tê-lo(a) aqui!");
                inicio(nomeDoHotel, nomeUsu);
            }
        } while (senhaP != 2678);
    }

    static void resv_quartos(String nomeUsu) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual o valor padrão da diária?");
        double valorDiaria = scanner.nextDouble();

        System.out.println("Quantas diárias serão necessárias?");
        int diaHospedagem = scanner.nextInt();

        scanner.nextLine();

        System.out.println("Digite o nome do hóspede:");
        String nomeHospede = scanner.nextLine();

        if (valorDiaria <= 0 || diaHospedagem <= 0 || diaHospedagem >= 30) {
            System.out.println("Valores inválidos.");
            return;
        }

        double somaDiaria = valorDiaria * diaHospedagem;

        System.out.println("O valor de " + diaHospedagem + " dias de hospedagem é de R$" + somaDiaria);
        System.out.println(nomeUsu + ", você confirma a hospedagem de " + nomeHospede + " por " + diaHospedagem + " dias? (S/N)");

        String confirmReserva = scanner.nextLine();

        if (confirmReserva.equalsIgnoreCase("S")) {
            System.out.println(nomeUsu + ", reserva efetuada para " + nomeHospede + ". O valor total é de R$" + somaDiaria);
        } else {
            System.out.println(nomeUsu + ", reserva não efetuada.");
        }
    }

    static void cadastro_hospede(String nomeUsu) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> listaHosp = new ArrayList<>();
        int gratuidade = 0, meia = 0, inteira = 0;
        double somaMeia = 0, somaInteira = 0;

        System.out.println("Qual o valor padrão da diária?");
        double valorPadrao = scanner.nextDouble();

        if (valorPadrao <= 0) {
            System.out.println("Valor inválido para a diária.");
            return;
        }

        String nomeHosp;
        while (true) {

            System.out.println("Informe o nome do hóspede ('pare' para encerrar): ");
            nomeHosp = scanner.next();

            if (nomeHosp.equalsIgnoreCase("pare")) {
                break;
            }

            System.out.println("Qual é a idade do hóspede?");
            int idadeHosp = scanner.nextInt();

            if (idadeHosp <= 0) {
                System.out.println("Idade inválida para o hóspede.");
                continue;
            }

            listaHosp.add(nomeHosp);

            if (idadeHosp <= 6) {
                System.out.println(nomeHosp + " cadastrado(a) com sucesso! " + nomeHosp + " possui hospedagem gratuita!");
                gratuidade++;
            } else if (idadeHosp >= 60) {
                System.out.println(nomeHosp + ", cadastrado(a) com sucesso! " + nomeHosp + " possui o direito de pagar meia!");
                meia++;
                somaMeia += valorPadrao / 2;
            } else {
                System.out.println(nomeHosp + ", cadastrado(a) com sucesso! " + nomeHosp + " irá pagar inteira!");
                inteira++;
                somaInteira += valorPadrao;
            }
        }

        double total = somaMeia + somaInteira;
        System.out.println("O total de hospedagens é: R$" + total + ". " + gratuidade + " hóspede(s) com gratuidade, " + meia + " hóspede(s) com meia e " + inteira + " hóspede(s) pagando inteira.");
    }

    static void pesquisa_hospede() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Digite o nome do hóspede que deseja pesquisar:");
        String nomePesquisado = scanner.nextLine();

        boolean encontrado = false;
        for (String hospede : listaHospedes) {
            if (hospede.equalsIgnoreCase(nomePesquisado)) {
                System.out.println("Hóspede encontrado: " + nomePesquisado);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            System.out.println("Hóspede não encontrado.");
        }
    }

    static void abst_carro() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual é o preço do álcool no posto Azevedo Oil? (por litro)");
        double precoAlcoolAzevedo = scanner.nextDouble();

        System.out.println("Qual é o preço da gasolina no posto Azevedo Oil? (por litro)");
        double precoGasolinaAzevedo = scanner.nextDouble();

        System.out.println("Qual é o preço do álcool no posto Dri Petrol? (por litro)");
        double precoAlcoolDri = scanner.nextDouble();

        System.out.println("Qual é o preço da gasolina no posto Dri Petrol? (por litro)");
        double precoGasolinaDri = scanner.nextDouble();

        double custoAbastecimentoAzevedo = precoAlcoolAzevedo * 42;
        double custoAbastecimentoDri = precoAlcoolDri * 42;

        if (custoAbastecimentoAzevedo < custoAbastecimentoDri) {
            System.out.println("É mais barato abastecer com álcool no posto Azevedo Oil.");
        } else if (custoAbastecimentoDri < custoAbastecimentoAzevedo) {
            System.out.println("É mais barato abastecer com álcool no posto Dri Petrol.");
        } else {
            System.out.println("O preço de abastecimento é o mesmo nos dois postos.");
        }
    }

    static void resv_evento() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual a duração do evento em horas?");
        int duracaoEvento = scanner.nextInt();

        System.out.println("Quantos garçons serão necessários?");
        int quantGarcons = scanner.nextInt();

        double custoPorGarcom = 10.50;

        double custoTotal = custoPorGarcom * quantGarcons * duracaoEvento;

        System.out.println("O custo total do evento é de R$" + custoTotal);
    }

    static void hora_comer() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Quantos convidados estarão presentes no evento?");
        int quantConvidados = scanner.nextInt();

        if (quantConvidados <= 0) {
            System.out.println("Número de convidados inválido.");
            return;
        }

        double cafePorConvidado = 0.20;
        double aguaPorConvidado = 0.50;
        int salgadosPorConvidado = 7;

        double totalCafe = cafePorConvidado * quantConvidados;
        double totalAgua = aguaPorConvidado * quantConvidados;
        int totalSalgados = salgadosPorConvidado * quantConvidados;

        double precoCafePorConvidado = 0.20;
        double precoAguaPorConvidado = 0.40;
        double precoSalgadosPorConvidado = 2.38;

        double custoTotal = (precoCafePorConvidado + precoAguaPorConvidado + precoSalgadosPorConvidado) * quantConvidados;

        System.out.println("Serão necessários:");
        System.out.println("- " + totalCafe + " litros de café");
        System.out.println("- " + totalAgua + " litros de água");
        System.out.println("- " + totalSalgados + " salgados");
        System.out.println("O custo total do evento será de R$" + custoTotal);
    }

    static void resv_auditorio() {
        Scanner scanner = new Scanner(System.in);

        final int CAPACIDADE_LARANJA = 150;
        final int CAPACIDADE_COLORADO = 350;

        System.out.println("Quantos convidados estarão presentes no evento?");
        int quantConvidados = scanner.nextInt();

        if (quantConvidados <= 0) {
            System.out.println("Número de convidados inválido.");
        } else if (quantConvidados <= CAPACIDADE_LARANJA) {
            System.out.println("Utilize o auditório Laranja.");
            if (quantConvidados < CAPACIDADE_LARANJA) {
                int cadeirasFaltantes = CAPACIDADE_LARANJA - quantConvidados;
                System.out.println("Você precisará adicionar " + cadeirasFaltantes + " cadeiras adicionais.");
            }
        } else if (quantConvidados <= CAPACIDADE_COLORADO) {
            System.out.println("Utilize o auditório Colorado.");
        } else {
            System.out.println("O número de convidados excede a capacidade máxima do auditório Colorado.");
        }
    }

    static void resv_rest() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Qual é o dia do seu evento? (segunda, terça, quarta, quinta, sexta, sábado ou domingo)");
        String dia = scanner.nextLine().toLowerCase();

        System.out.println("Qual é o horário do seu evento? (entre 7 e 23 para dias de semana, e entre 7 e 15 para fins de semana)");
        int horario = scanner.nextInt();

        boolean disponibilidade = verificarDisponibilidadeRestaurante(dia, horario);

        if (disponibilidade) {
            System.out.println("Restaurante disponível para reserva no dia " + dia + " às " + horario + " horas.");
        } else {
            System.out.println("Restaurante indisponível para reserva no dia " + dia + " às " + horario + " horas.");
        }
    }

    static boolean verificarDisponibilidadeRestaurante(String dia, int horario) {
        if (dia.equals("sábado") || dia.equals("domingo")) {
            return horario >= 7 && horario <= 15;
        } else {
            return horario >= 7 && horario <= 23;
        }
    }

    static void manutencao_ar_condicionado() {
        Scanner scanner = new Scanner(System.in);

        String empresaMaisBarata = "";
        double custoMaisBarato = Double.MAX_VALUE;

        while (true) {
            System.out.println("Qual é o nome da empresa de manutenção? (Digite 'fim' para encerrar)");
            String nomeEmpresa = scanner.nextLine();

            if (nomeEmpresa.equalsIgnoreCase("fim")) {
                break;
            }

            System.out.println("Qual é o valor do aparelho?");
            double valorAparelho = scanner.nextDouble();

            System.out.println("Qual é a quantidade de aparelhos?");
            int quantidadeAparelhos = scanner.nextInt();

            System.out.println("Qual é o percentual de desconto?");
            int desconto = scanner.nextInt();

            System.out.println("Qual é o número mínimo de aparelhos para conseguir o desconto?");
            int minimoAparelhos = scanner.nextInt();

            double custoTotal;
            if (quantidadeAparelhos >= minimoAparelhos) {
                custoTotal = valorAparelho * quantidadeAparelhos * (100 - desconto) / 100;
            } else {
                custoTotal = valorAparelho * quantidadeAparelhos;
            }

            if (custoTotal < custoMaisBarato) {
                empresaMaisBarata = nomeEmpresa;
                custoMaisBarato = custoTotal;
            }

            System.out.println("O serviço de " + nomeEmpresa + " custará R$" + custoTotal);
            scanner.nextLine();
        }

        if (!empresaMaisBarata.isEmpty()) {
            System.out.println("O orçamento de menor valor é da empresa " + empresaMaisBarata + " com R$" + custoMaisBarato);
        } else {
            System.out.println("Nenhuma empresa de manutenção foi inserida.");
        }
    }

    static void sair() {
        System.out.println("Obrigado por usar nosso sistema. Até mais!");
        System.exit(0);
    }

    static void erro() {
        System.out.println("Opção inválida. Por favor, selecione uma opção válida.");
    }
}
