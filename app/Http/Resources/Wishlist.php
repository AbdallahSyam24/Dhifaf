<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Wishlist extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'wishlist_id' => $this->id,
            'wishlist_product' => Product::make($this->product),
        ];
    }
}
