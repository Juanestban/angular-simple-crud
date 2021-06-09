import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/apiRMServices/characters.service';
import { Characters } from '../../models/Characters';

@Component({
  selector: 'app-characters-form-table',
  templateUrl: './characters-form-table.component.html',
  styleUrls: ['./characters-form-table.component.css'],
})
export class CharactersFormTableComponent implements OnInit {
  public formCharacter: Characters = {
    name: '',
    species: '',
    status: '',
    gender: '',
    location: {
      name: '',
    },
  };
  public test!: Characters[];
  public visible: boolean = false;

  constructor(private charServices: CharactersService) {}

  ngOnInit(): void {}

  onSubmit(e: Event) {
    console.log(e);
    console.log(this.formCharacter);
    this.charServices.getAllCharacters().subscribe((res: Characters[]) => {
      this.test = res.map((val: Characters) => ({
        gender: val.gender,
        location: {
          name: val.location.name,
        },
        name: val.name,
        species: val.species,
        status: val.status,
      }));
      this.formCharacter = this.test[0];
      console.log(this.test);
    });
  }

  handleClick(): void {
    this.visible = !this.visible;
    console.log('clicked', this.visible);
  }

  handleBlur(): void {
    this.visible = false;
    console.log('blur', this.visible);
  }
}
