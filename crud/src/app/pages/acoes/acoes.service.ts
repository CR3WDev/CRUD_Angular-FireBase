import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acoes} from 'src/app/shared/modules/acoes.interface'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AcoesService {
	acoes: Observable<Acoes[]>;

	private AcoesCollection: AngularFirestoreCollection<Acoes>;
  constructor(private readonly afs: AngularFirestore) { 
  	this.AcoesCollection = afs.collection<Acoes>('acoess')
  	this.getAcoes();
  }

  onDeleteAcao(actId: string): Promise<void> {
  	return new Promise (async (resolve,reject) => {
  		try{
  			const result = await this.AcoesCollection.doc(actId).delete();
         console.log(actId);
  			resolve(result);
  		}catch (err){
  			reject(err.message);
  		}
  	})
  }
  onSaveAcao(acoes: Acoes, actId:string): Promise<void> {
  	return new Promise( async (resolve, reject) => {
  		try{
  			const id = actId || this.afs.createId();
  			const data = {id, ...acoes};
  			const result = this.AcoesCollection.doc(id).set(data);
  			resolve(result);
  		}catch(err) {
  			reject(err.message)
  		}
  	});
  }
  private getAcoes(): void {
  	this.acoes = this.AcoesCollection.snapshotChanges().pipe(
  		map(actions => actions.map(a => a.payload.doc.data() as Acoes))
  )}
}
