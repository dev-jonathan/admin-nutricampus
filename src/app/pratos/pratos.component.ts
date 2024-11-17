// @ts-ignore
import { Component, OnInit, ViewChild } from '@angular/core';
import { PratosService, Prato, Ingrediente } from './pratos.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css'],
})
export class PratosComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  // Lista de pratos carregada da API
  pratos: Prato[] = [];
  // Pratos selecionados na interface
  selectedPratos: Prato[] = [];
  // Objeto representando o prato em edição/criação
  prato: Prato = this.initializePrato();
  // Controle para exibir ou ocultar os modais
  pratoDialog: boolean = false;
  pratoDialogHeader: string = 'Novo Prato';
  ingredienteDialog: boolean = false;
  // Controle do ingrediente atualmente selecionado
  selectedPrato: Prato | null = null;
  selectedIngrediente: Ingrediente = this.initializeIngrediente();
  // Texto de busca do usuário
  searchText: string = '';

  // Indicação de carregamento
  isLoading: boolean = false;

  constructor(
    private pratosService: PratosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    // Carrega os pratos ao inicializar o componente
    this.loadPratos();
  }

  // Centraliza as mensagens de feedback para o usuário
  private showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  // Carrega a lista de pratos do backend
  loadPratos() {
    this.isLoading = true;
    this.pratosService.getPratos().subscribe(
      (data) => {
        this.pratos = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      },
    );
  }

  applyFilterGlobal() {
    if (this.table) {
      this.table.filterGlobal(this.searchText, 'contains');
    }
  }

  // Inicializa um prato vazio
  initializePrato(): Prato {
    return {
      nome_prato: '',
      link_receita: '',
      ingredientes: [],
    };
  }

  // Inicializa um ingrediente vazio
  initializeIngrediente(): Ingrediente {
    return {
      id_ingrediente: undefined,
      nome_ingrediente: '',
      quantidade_original: undefined,
      unidade_original: '',
      a_gosto: false,
      quantidade_normalizada: undefined,
      unidade_normalizada: '',
      calorias: undefined,
      id_prato: undefined,
    };
  }

  // Abre o modal para criar um novo prato
  openNew() {
    this.prato = this.initializePrato();
    this.pratoDialogHeader = 'Novo Prato';
    this.pratoDialog = true;
  }

  // Fecha o modal de prato
  hideDialog() {
    this.pratoDialog = false;
  }

  // Salva ou atualiza um prato
  savePrato() {
    if (this.prato.id_prato) {
      this.pratosService.updatePrato(this.prato).subscribe(() => {
        this.loadPratos();
        this.showMessage('success', 'Sucesso', 'Prato atualizado.');
        this.pratoDialog = false;
      });
    } else {
      this.pratosService.createPrato(this.prato).subscribe((prato) => {
        this.pratos.push(prato);
        this.showMessage('success', 'Sucesso', 'Prato criado.');
        this.pratoDialog = false;
      });
    }
  }

  // Edita um prato existente
  editPrato(prato: Prato) {
    this.prato = { ...prato };
    this.pratoDialogHeader = 'Editar Prato';
    this.pratoDialog = true;
  }

  // Deleta um prato existente
  deleteSelectedPratos() {
    console.log('chamada deleteSelectedPratos()');
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar os pratos selecionados?',
      accept: () => {
        const ids = this.selectedPratos.map((prato) => prato.id_prato);
        ids.forEach((id) => {
          this.pratosService.deletePrato(id!).subscribe(
            () => {
              this.pratos = this.pratos.filter((p) => p.id_prato !== id);
              this.selectedPratos = [];
            },
            (error) => {
              console.error(error);
              this.showMessage('error', 'Erro', 'Falha ao deletar prato');
            },
          );
        });
        this.showMessage('success', 'Sucesso', 'Prato(s) deletado(s).');
      },
    });
  }

  addIngrediente(prato: Prato | null) {
    if (!prato) return;
    const novoIngrediente: Ingrediente = {
      id_ingrediente: 0,
      nome_ingrediente: '',
    };
    prato.ingredientes!.push(novoIngrediente);
    const pratoIndex = this.pratos.findIndex(
      (p) => p.id_prato === prato.id_prato,
    );
    if (pratoIndex > -1) this.pratos[pratoIndex] = { ...prato };
  }

  deleteIngrediente(ingrediente: Ingrediente, prato: Prato | null) {
    if (!prato || !prato.ingredientes) return;
    if (ingrediente.id_ingrediente === 0) {
      prato.ingredientes = prato.ingredientes.filter(
        (ing) => ing !== ingrediente,
      );
    } else {
      this.confirmationService.confirm({
        message: `Tem certeza que deseja deletar o ingrediente "${ingrediente.nome_ingrediente}"?`,
        accept: () => {
          this.pratosService
            .deleteIngrediente(ingrediente.id_ingrediente!)
            .subscribe(() => {
              prato.ingredientes = prato.ingredientes!.filter(
                (ing) => ing.id_ingrediente !== ingrediente.id_ingrediente,
              );
              const pratoIndex = this.pratos.findIndex(
                (p) => p.id_prato === prato.id_prato,
              );
              if (pratoIndex > -1) this.pratos[pratoIndex] = { ...prato };
              this.showMessage('success', 'Sucesso', 'Ingrediente deletado');
            });
        },
      });
    }
  }

  editIngrediente(ingrediente: Ingrediente, prato: Prato) {
    this.selectedIngrediente = { ...ingrediente };
    this.selectedPrato = {
      ...prato,
      nome_prato: prato.nome_prato || '',
      link_receita: prato.link_receita || '',
      ingredientes: prato.ingredientes || [],
    };
    this.ingredienteDialog = true;
  }

  hideIngredienteDialog() {
    console.log('Fechando o modal de ingrediente');
    this.ingredienteDialog = false;
    this.selectedIngrediente = { id_ingrediente: 0, nome_ingrediente: '' }; // Inicializa com valores padrão
  }

  saveIngrediente() {
    if (!this.selectedIngrediente || !this.selectedPrato) return;

    if (this.selectedIngrediente.id_ingrediente === undefined) {
      // Adicionando novo ingrediente
      this.pratosService.createIngrediente(this.selectedIngrediente).subscribe(
        (novoIngrediente) => {
          console.log('Ingrediente criado no backend:', novoIngrediente);

          // Adiciona o novo ingrediente ao prato selecionado
          this.selectedPrato!.ingredientes!.push(novoIngrediente);

          // Atualiza o prato na lista principal
          const pratoIndex = this.pratos.findIndex(
            (p) => p.id_prato === this.selectedPrato!.id_prato,
          );

          if (pratoIndex > -1) {
            this.pratos[pratoIndex] = { ...this.selectedPrato! };
          }
          this.showMessage('success', 'Sucesso', 'Ingrediente adicionado!');

          this.hideIngredienteDialog();
        },
        (error) => {
          console.error('Erro ao criar ingrediente:', error);
          this.showMessage(
            'error',
            'Erro',
            'Falha ao adicionar ingrediente no backend.',
          );
        },
      );
    } else {
      // Atualização de ingrediente existente
      this.pratosService.updateIngrediente(this.selectedIngrediente).subscribe(
        (updatedIngrediente) => {
          const ingredienteIndex = this.selectedPrato!.ingredientes!.findIndex(
            (ing) => ing.id_ingrediente === updatedIngrediente.id_ingrediente,
          );

          if (ingredienteIndex > -1) {
            this.selectedPrato!.ingredientes![ingredienteIndex] =
              updatedIngrediente;
          }

          this.showMessage('success', 'Sucesso', 'Ingrediente atualizado!');

          this.hideIngredienteDialog();
        },
        (error) => {
          console.error('Erro ao atualizar ingrediente:', error);
          this.showMessage(
            'error',
            'Erro',
            'Falha ao atualizar ingrediente no backend.',
          );
        },
      );
    }
  }

  openAddIngredienteDialog(prato: Prato) {
    this.selectedPrato = prato;
    this.selectedIngrediente = this.initializeIngrediente();
    this.selectedIngrediente.id_prato = prato.id_prato;

    if (!this.selectedPrato.ingredientes) {
      this.selectedPrato.ingredientes = [];
    }

    this.ingredienteDialog = true;
    console.log('Dialog de adicionar ingrediente aberto.');
  }
}
