import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';


@Directive({
  selector: '[mFARouing]'
})
export class MFARouingDirective implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();


  constructor(
    private element: ElementRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.url
      .pipe(
        map(() => this.router.url),
        takeUntil(this.destroyed$)
      )
      .subscribe((url) => (this.element.nativeElement.route = url));
  }

  ngOnDestroy(): void {
      this.destroyed$.next();
  }

}
