// @ts-ignore
// src/app/pratos/pratos.component.ts
import { Component, OnInit } from '@angular/core';
import { PratosService, Prato, Ingrediente } from './pratos.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css'],
})
export class PratosComponent implements OnInit {
  pratos: Prato[] = [];
  selectedPratos: Prato[] = [];
  prato: Prato = this.initializePrato();
  pratoDialog: boolean = false;
  pratoDialogHeader: string = 'Novo Prato';
  ingredienteDialog: boolean = false;
  selectedPrato: Prato | null = null;
  selectedIngrediente: Ingrediente = {
    id_ingrediente: 0,
    nome_ingrediente: '',
  };

  isLoading: boolean = false;

  constructor(
    private pratosService: PratosService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.loadPratos();
  }

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

  initializePrato(): Prato {
    return {
      nome_prato: '',
      link_receita: '',
      ingredientes: [],
    };
  }

  openNew() {
    this.prato = this.initializePrato();
    this.pratoDialogHeader = 'Novo Prato';
    this.pratoDialog = true;
  }

  hideDialog() {
    this.pratoDialog = false;
  }

  savePrato() {
    if (this.prato.id_prato) {
      this.pratosService.updatePrato(this.prato).subscribe(() => {
        this.loadPratos();
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Prato atualizado',
        });
        this.pratoDialog = false;
      });
    } else {
      this.pratosService.createPrato(this.prato).subscribe((prato) => {
        this.pratos.push(prato);
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Prato criado',
        });
        this.pratoDialog = false;
      });
    }
  }

  editPrato(prato: Prato) {
    this.prato = { ...prato };
    this.pratoDialogHeader = 'Editar Prato';
    this.pratoDialog = true;
  }

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
              this.messageService.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Falha ao deletar prato',
              });
            },
          );
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Pratos deletados',
        });
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
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Ingrediente deletado',
              });
            });
        },
      });
    }
  }

  editIngrediente(ingrediente: Ingrediente, prato: Prato) {
    this.selectedIngrediente = { ...ingrediente };
    this.selectedPrato = {
      ...prato,
      nome_prato: prato.nome_prato || '', // Garante que `nome_prato` nunca será undefined
      link_receita: prato.link_receita || '', // Garante que `link_receita` nunca será undefined
      ingredientes: prato.ingredientes || [], // Garante que `ingredientes` nunca será undefined
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

    if (this.selectedIngrediente.id_ingrediente === 0) {
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

          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Ingrediente adicionado com sucesso!',
          });

          this.hideIngredienteDialog();
        },
        (error) => {
          console.error('Erro ao criar ingrediente:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Falha ao adicionar ingrediente no backend.',
          });
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

          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Ingrediente atualizado com sucesso!',
          });

          this.hideIngredienteDialog();
        },
        (error) => {
          console.error('Erro ao atualizar ingrediente:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Falha ao atualizar ingrediente no backend.',
          });
        },
      );
    }
  }

  openAddIngredienteDialog() {
    if (!this.selectedPrato) {
      console.error('Nenhum prato selecionado para adicionar ingrediente.');
      return; // Impede a execução caso selectedPrato seja nulo
    }

    this.selectedIngrediente = {
      id_ingrediente: 0,
      nome_ingrediente: '',
      id_prato: this.selectedPrato.id_prato, // Associa o ingrediente ao prato selecionado
    };

    if (!this.selectedPrato.ingredientes) {
      this.selectedPrato.ingredientes = []; // Inicializa o array de ingredientes, se necessário
    }

    this.ingredienteDialog = true; // Abre o modal
    console.log('Dialog de adicionar ingrediente aberto.');
  }
}
