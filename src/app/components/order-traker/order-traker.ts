import { Component, OnDestroy, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-order-traker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-traker.html',
  styleUrl: './order-traker.css',
})
export class OrderTraker implements OnInit, OnDestroy {
  // Inject the Change Detector Utility
  private cdr = inject(ChangeDetectorRef);

  orderStatuses: string[] = [
    "📦 Order Confirmed",
    "📦 Preparing",
    "📦 Out for delivery",
    "📦 Delivered"
  ];

  status: string = 'Connecting to pipeline...';
  index: number = -1;
  private sub!: Subscription;

  getOrderStatusObservable(): Observable<string> {
    return new Observable((observer) => {
      let counter = 0;

      let interval = setInterval(() => {
        if (counter >= this.orderStatuses.length) {
          observer.complete();
          clearInterval(interval);
          return;
        }

        if (this.orderStatuses[counter] === "") {
          observer.error('Error: Status is blank');
          clearInterval(interval);
          return;
        }

        observer.next(this.orderStatuses[counter]);
        counter++;
      }, 2000);

      return {
        unsubscribe: () => {
          clearInterval(interval);
        }
      };
    });
  }

  ngOnInit() {
    this.sub = this.getOrderStatusObservable().subscribe({
      next: (val) => {
        this.status = val;
        this.index = this.orderStatuses.indexOf(val);
        
        // 🔥 FORCE ANGULAR TO UPDATE THE HTML IMMEDIATELY
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        this.status = err;
        this.cdr.detectChanges();
      },
      complete: () => {
        console.log("Finished!");
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}